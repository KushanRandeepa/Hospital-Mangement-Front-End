import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientManagerPageComponent } from './patient-manager-page.component';

describe('PatientManagerPageComponent', () => {
  let component: PatientManagerPageComponent;
  let fixture: ComponentFixture<PatientManagerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientManagerPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientManagerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
