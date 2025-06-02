import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Patient } from '../../models/Patient';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2'
import { AuthServiceService } from '../../service/auth-service.service';

@Component({
  selector: 'app-add-patient',
  imports: [FormsModule, CommonModule],
  templateUrl: './add-patient.component.html',
  styleUrl: './add-patient.component.css'
})
export class AddPatientComponent {


  isdisabled: boolean = true;
  isChecked: boolean = false;
  role:string | null = null;

  constructor(private http: HttpClient,private authService :AuthServiceService) {
    this.isCheckedButton();
    this.role = this.authService.getUserRole();
  }

  isCheckedButton() {
    this.isdisabled = true
    this.isChecked = false
  }
  viewSaveButton() {
    this.isdisabled = !this.isChecked;
  }

  public patient: Patient = new Patient("", "", "", "", "", "", "", "", "", "", "",)

  savePatient() {
    console.log(this.patient);

    this.http.post("http://localhost:8080/patient/add-patient", this.patient).subscribe(data => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500
      })

      this.patient.name = ""
      this.patient.age = ""
      this.patient.nic = ""
      this.patient.address = "";
      this.patient.contact = ""
      this.patient.email = ""
      this.patient.note = ""
      this.patient.allergies = ""
      this.patient.bloodGroup = ""
      this.patient.category = ""
      this.patient.gender = ""

      this.isCheckedButton();

    }

    );


  }

}
