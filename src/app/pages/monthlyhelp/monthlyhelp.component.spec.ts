import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyhelpComponent } from './monthlyhelp.component';

describe('MonthlyhelpComponent', () => {
  let component: MonthlyhelpComponent;
  let fixture: ComponentFixture<MonthlyhelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthlyhelpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthlyhelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
