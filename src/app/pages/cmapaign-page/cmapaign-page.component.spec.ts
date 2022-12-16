import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmapaignPageComponent } from './cmapaign-page.component';

describe('CmapaignPageComponent', () => {
  let component: CmapaignPageComponent;
  let fixture: ComponentFixture<CmapaignPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmapaignPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CmapaignPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
