import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthServiceService } from '../../service/auth-service.service';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { PatientProfileComponent } from '../../profile/patient-profile/patient-profile.component';

@Component({
  selector: 'app-dashboard-page',
  imports: [CommonModule, FormsModule,RouterLink],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.css'
})
export class DashboardPageComponent {
  role: string | null = null;
  patientdetails: any = {};
  id: string | null = null;

  constructor(private http: HttpClient, private authService: AuthServiceService,private router: Router) {
    this.role = this.authService.getUserRole();
    this.id = this.authService.getUserId();
    console.log(this.id)
  }
  addPatientDetails() {
    this.http.get(`http://localhost:8080/patient/search-by-id/${this.id}`, {
      headers: { 'Authorization': `Bearer ${this.authService.getToken}` }
    }
    ).subscribe(data => {
      this.patientdetails = data;
      console.log(this.patientdetails);
    });
  }
  updatePatientDetail: any = {}

  updatePatient() {
    console.log(this.patientdetails);
    this.updatePatientDetail = this.patientdetails;
    this.http.put("http://localhost:8080/patient/update", this.updatePatientDetail).subscribe(data => {
      Swal.fire("Updated!", "", "success");});
  }

  addAppointment(){
    this.router.navigate(['/dashboard/appointment/add-appointment']);
  }
  goToPaymentPage(){
        this.router.navigate(['/dashboard/appointment/payment']);
  }
}
