import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-add-appointment',
  imports: [ReactiveFormsModule],
  standalone: true,
  templateUrl: './add-appointment.component.html',
  styleUrl: './add-appointment.component.css'
})
export class AddAppointmentComponent implements OnInit {
 
  constructor(private http: HttpClient) {

 }
  addAppointmentForm!: FormGroup;

  ngOnInit(): void {

    this.addAppointmentForm = new FormGroup({
      'type': new FormControl(null,[Validators.required]),
      'qr': new FormControl(null,[Validators.required]),   
      'description': new FormControl(null),
      'status': new FormControl(null,[Validators.required]),
      'roomNumber': new FormControl(null,[Validators.required]),
      'queNumber': new FormControl(null,[Validators.required]),
      'patientId':new FormControl(null,[Validators.required]),
      'adminId': new FormControl(null,[Validators.required]),
      'appointmentDate': new FormControl(null,[Validators.required]),
      'appointmentTime': new FormControl(null,[Validators.required])
    })
  }
  onSubmit(){
    console.log(this.addAppointmentForm.value);
     this.http.post("http://localhost:8080/appointment/add-appointment", this.addAppointmentForm.value).subscribe(data => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          });
  });
    this.addAppointmentForm.reset();
}

}
