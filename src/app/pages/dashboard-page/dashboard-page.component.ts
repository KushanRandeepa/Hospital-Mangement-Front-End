import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthServiceService } from '../../service/auth-service.service';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard-page',
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.css'
})
export class DashboardPageComponent {
  role: string | null = null;
  patientdetails: any = {};
  id: string | null = null;

  constructor(private http: HttpClient, private authService: AuthServiceService) {
    this.role = this.authService.getUserRole();
    this.id = this.authService.getUserId();
    console.log(this.id)
  }
  addPatientDetails() {
    this.http.get(`http://localhost:8080/patient/search-by-id/${this.id}`,{
            headers: { 'Authorization': `Bearer ${this.authService.getToken}` }}
    ).subscribe(data => {
      this.patientdetails = data;
      console.log(this.patientdetails);
    });
  }

  updatePatient() {
    console.log(this.patientdetails);

    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.http.put("http://localhost:8080/patient/update", this.patientdetails)
        Swal.fire("Updated!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not update", "", "info");
      }
    });
  }
}
