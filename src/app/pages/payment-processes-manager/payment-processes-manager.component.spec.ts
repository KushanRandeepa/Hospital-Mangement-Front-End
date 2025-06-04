import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentProcessesManagerComponent } from './payment-processes-manager.component';

describe('PaymentProcessesManagerComponent', () => {
  let component: PaymentProcessesManagerComponent;
  let fixture: ComponentFixture<PaymentProcessesManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentProcessesManagerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentProcessesManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
