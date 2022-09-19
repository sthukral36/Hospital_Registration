import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPatientInformationComponent } from './show-patient-information.component';

describe('ShowPatientInformationComponent', () => {
  let component: ShowPatientInformationComponent;
  let fixture: ComponentFixture<ShowPatientInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowPatientInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowPatientInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
