import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentManagerPageComponent } from './payment-manager-page.component';

describe('PaymentManagerPageComponent', () => {
  let component: PaymentManagerPageComponent;
  let fixture: ComponentFixture<PaymentManagerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentManagerPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentManagerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
