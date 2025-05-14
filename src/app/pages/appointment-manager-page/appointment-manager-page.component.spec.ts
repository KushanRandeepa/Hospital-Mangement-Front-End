import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentManagerPageComponent } from './appointment-manager-page.component';

describe('AppointmentManagerPageComponent', () => {
  let component: AppointmentManagerPageComponent;
  let fixture: ComponentFixture<AppointmentManagerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppointmentManagerPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointmentManagerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
