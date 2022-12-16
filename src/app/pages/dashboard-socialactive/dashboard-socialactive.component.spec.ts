import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSocialactiveComponent } from './dashboard-socialactive.component';

describe('DashboardSocialactiveComponent', () => {
  let component: DashboardSocialactiveComponent;
  let fixture: ComponentFixture<DashboardSocialactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardSocialactiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardSocialactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
