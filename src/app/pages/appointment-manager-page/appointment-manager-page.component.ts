import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-appointment-manager-page',
  imports: [FormsModule,CommonModule],
  templateUrl: './appointment-manager-page.component.html',
  styleUrl: './appointment-manager-page.component.css'
})
export class AppointmentManagerPageComponent {
  appointmentList: any = []

  constructor(private http: HttpClient) {
    this.loadAppointmentList();
  }

  loadAppointmentList() {
    this.http.get("http://localhost:8080/appointment/get-all").subscribe(data => {
      this.appointmentList = data;
    });

  }
}
