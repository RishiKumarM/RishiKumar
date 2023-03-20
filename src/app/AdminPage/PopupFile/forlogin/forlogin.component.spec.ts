import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForloginComponent } from './forlogin.component';

describe('ForloginComponent', () => {
  let component: ForloginComponent;
  let fixture: ComponentFixture<ForloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForloginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
