import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../service/auth-service.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

export interface ProductRequest {

  amount: number;  // in cents (e.g., 1000 = $10)
  quantity: number;
  name: string;
  currency: string;
}

@Component({
  selector: 'app-payment-processes-manager',
  imports: [FormsModule, CommonModule],
  templateUrl: './payment-processes-manager.component.html',
  styleUrl: './payment-processes-manager.component.css'
})

export class PaymentProcessesManagerComponent {
  appointments: any = []
  price: any = '$20';

  constructor(private http: HttpClient, private router: Router, private authService: AuthServiceService) {
    this.loadAppointments()
  }
  loadAppointments() {
    this.http.get<any[]>(`http://localhost:8080/appointment/search-by-patientId/${this.authService.getUserId()}`).subscribe(data => {
      data.forEach(element => {
        if (element.paymentStatus === 'UNPAID' || element.paymentStatus == null) {
          this.appointments.push(element)

        }
      });
      console.log(this.appointments);
    });
  }
  payNow(id: string) {

     const product: ProductRequest = {
     
      amount: 2000, 
      quantity: 1,
      name: id,
      currency: 'USD'
    };
    this.http.post(`http://localhost:8080/payment-checkout`, product).subscribe({
      next: (response: any) => {
        console.log(response);
        if ( response.sessionUrl) {
        window.location.href = response.sessionUrl; // Redirect to the payment URL
    }else{
        console.error('Invalid response from server:', response);
        alert('Payment session URL is not available.');
      }
    }
      ,
      error: (error) => {
        console.error('Error during payment process:', error);
        alert('An error occurred while processing the payment. Please try again later.');
      }
    });

  }
}
