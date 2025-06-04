import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { AuthServiceService } from '../../service/auth-service.service';

@Component({
  selector: 'app-appointment-manager-page',
  imports: [FormsModule, CommonModule],
  templateUrl: './appointment-manager-page.component.html',
  styleUrl: './appointment-manager-page.component.css'
})
export class AppointmentManagerPageComponent {
  appointmentList: any = []
  role: string | null = null;
  constructor(private http: HttpClient, private authService: AuthServiceService) {
    this.loadAppointmentList();
    this.role = this.authService.getUserRole();
  }

  loadAppointmentList() {
    if (this.authService.getUserRole() == 'ROLE_PATIENT') {
      this.http.get(`http://localhost:8080/appointment/search-by-patientId/${this.authService.getUserId()}`).subscribe(data => {
         this.appointmentList = data;
        console.log(data)
      });
    } else {
      this.http.get("http://localhost:8080/appointment/get-all").subscribe(data => {
        this.appointmentList = data;
        console.log(data)
      });
    }

  }

  selectAppointment(appointment: any) {
console.log(appointment);

  }
  deleteAppointment(id: string) {

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.http.delete(`http://localhost:8080/appointment/delete-appointment/${id}`).subscribe(data => {
          this.loadAppointmentList();
          console.log(data)
        });
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  }

}
