import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">Created By <b><a href="https://kewirus.com" target="_blank">Kewirus</a></b> 2020</span>
    <div class="socials">
    <a href="#" target="_blank"> <nb-icon icon="facebook">Facebook</nb-icon></a>
      <a href="#" target="_blank"> <nb-icon icon="google">Google</nb-icon></a>
    </div>
  `,
})
export class FooterComponent {
  
}
