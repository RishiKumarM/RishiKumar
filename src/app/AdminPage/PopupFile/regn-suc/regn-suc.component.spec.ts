import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegnSucComponent } from './regn-suc.component';

describe('RegnSucComponent', () => {
  let component: RegnSucComponent;
  let fixture: ComponentFixture<RegnSucComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegnSucComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegnSucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
