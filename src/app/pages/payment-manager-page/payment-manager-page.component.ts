import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-manager-page',
  imports: [],
  templateUrl: './payment-manager-page.component.html',
  styleUrl: './payment-manager-page.component.css'
})
export class PaymentManagerPageComponent {

  constructor(private router:Router){

  }
  goPaymentProcesses(){
    this.router.navigate(['dashboard/payments'])
  }
}
