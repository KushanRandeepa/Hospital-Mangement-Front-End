import { CommonModule, NgFor } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-patient-manager-page',
  imports: [NgFor, CommonModule],
  templateUrl: './patient-manager-page.component.html',
  styleUrl: './patient-manager-page.component.css'
})
export class PatientManagerPageComponent {

  public patientList: any = [];

  constructor(private http: HttpClient) {
    this.loadPatient();
  }

  loadPatient() {
    this.http.get("http://localhost:8080/patient/get-all").subscribe(data => {
      this.patientList = data
    });
  }


  deletePatient(id: any) {
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
        this.http.delete(`http://localhost:8080/patient/delete-by-id/${id}`).subscribe(data => {
          this.loadPatient();
        });
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  }

  editPatient(patient: any) {
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
        this.http.delete(`http://localhost:8080/patient/update/${patient}`).subscribe(data => {
          this.loadPatient();
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
