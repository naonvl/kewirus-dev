import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepsDetailComponent } from './steps-detail.component';

describe('StepsDetailComponent', () => {
  let component: StepsDetailComponent;
  let fixture: ComponentFixture<StepsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
