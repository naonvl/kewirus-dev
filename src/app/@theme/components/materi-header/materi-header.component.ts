import { PagesRouteService } from './../../../pages/pages-route.service';
import { Component, OnInit, TemplateRef, ViewChild, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { NbMediaBreakpointsService, NbMenuService, NbSidebarService, NbThemeService, NbWindowService } from '@nebular/theme';
import { UserData } from '../../../@core/data/users';
import { map, filter } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { NB_WINDOW } from '@nebular/theme';
import { AuthService } from '../../../auth/auth.service';
@Component({
  selector: 'ngx-mat-header',
  styleUrls: ['./materi-header.component.scss'],
  templateUrl: './materi-header.component.html',
})
export class MateriHeaderComponent implements OnInit {
  @ViewChild('contentTemplate', { static: false }) contentTemplate: TemplateRef<any>;
  private destroy$: Subject<void> = new Subject<void>();
  userPictureOnly: boolean = false;
  user: any;
  userMenu = [{ title: 'Profile' }, { title: 'Log out' }];
  loggedIn: boolean;
  rememberUser: any;
  constructor(private sidebarService: NbSidebarService,
    private menuService: NbMenuService,
    private themeService: NbThemeService,
    private userService: UserData,
    private windowService: NbWindowService,
    public auth: AuthService,
    @Inject(NB_WINDOW) private window,
    private router: Router,
    public routes: PagesRouteService,
    private breakpointService: NbMediaBreakpointsService) {

  }
  toProject(){
    this.router.navigateByUrl('/pages/projects/all-project');
  }
  openWindow() {
    this.windowService.open(
      this.contentTemplate,
      { title: 'Free Member' },
    );
  }
  signOut(): void {
    this.auth.signOut();
    this.router.navigateByUrl('/auth/login');
  }
  ngOnInit() {
    this.toggleSidebar();
    //logout
    this.menuService.onItemClick()
      .pipe(
        filter(({ tag }) => tag === 'my-context-menu'), map(({ item: { title } }) => title)).subscribe(title => {
          if (title == "Log out") {
            this.signOut();
          }
        });
    //logout

    this.user = this.auth.user$;
    this.rememberUser = localStorage.getItem('user');
    console.log(this.rememberUser);
    
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    return false;
  }

  navigateHome() {
    this.menuService.navigateHome();
    return false;
  }
  openChat() {
    this.router.navigateByUrl('/pages/chat');
  }
}
