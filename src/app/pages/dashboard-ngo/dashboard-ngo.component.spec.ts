import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardNGOComponent } from './dashboard-ngo.component';

describe('DashboardNGOComponent', () => {
  let component: DashboardNGOComponent;
  let fixture: ComponentFixture<DashboardNGOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardNGOComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardNGOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
