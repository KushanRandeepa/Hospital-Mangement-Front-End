import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthServiceService } from '../../service/auth-service.service';

@Component({
  selector: 'app-payment-response',
  imports: [],
  templateUrl: './payment-response.component.html',
  styleUrl: './payment-response.component.css'
})
export class PaymentResponseComponent {
  constructor(private http: HttpClient,private authService: AuthServiceService) {
  }

}
