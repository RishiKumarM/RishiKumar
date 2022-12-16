import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampagainComponent } from './campagain.component';

describe('CampagainComponent', () => {
  let component: CampagainComponent;
  let fixture: ComponentFixture<CampagainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampagainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampagainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
