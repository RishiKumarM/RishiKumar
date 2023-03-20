import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpsucssfulComponent } from './otpsucssful.component';

describe('OtpsucssfulComponent', () => {
  let component: OtpsucssfulComponent;
  let fixture: ComponentFixture<OtpsucssfulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtpsucssfulComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtpsucssfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
