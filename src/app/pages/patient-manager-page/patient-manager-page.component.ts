import { CommonModule, NgFor } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-patient-manager-page',
  imports: [FormsModule, CommonModule],
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

  selectedPatient: any = {};

  selectPatient(patient: any) {

    this.selectedPatient = patient;
    console.log(this.selectedPatient)
  }

  updatePatient() {
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.http.put("http://localhost:8080/patient/update/", this.selectedPatient)
         Swal.fire("Updated!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not update", "", "info");
      }
    });

  }





}
