import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2'
import { AuthServiceService } from '../../service/auth-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-appointment',
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  standalone: true,
  templateUrl: './add-appointment.component.html',
  styleUrl: './add-appointment.component.css'
})
export class AddAppointmentComponent implements OnInit {
role: string | null = null;
customID:string | null=null;
  constructor(private http: HttpClient, public authService: AuthServiceService) {

    this.authService = authService
  }
  addAppointmentForm!: FormGroup;

  ngOnInit(): void {
    this.role= this.authService.getUserRole();
    console.log(this.role);
    console.log(this.role?.includes('ROLE_DOCTOR')); 
    console.log(this.role?.includes('ROLE_ADMIN'));
     this.customID=this.authService.getUserId();
    
    this.addAppointmentForm = new FormGroup({
      'type': new FormControl(null, [Validators.required]),
      'qr': new FormControl(null, [Validators.required]),
      'description': new FormControl(null),
      'status': new FormControl(null, [Validators.required]),
      'roomNumber': new FormControl(null, [Validators.required]),
      'patientId': new FormControl( this.customID),
      'appointmentDate': new FormControl(null, [Validators.required]),
      'appointmentTime': new FormControl(null, [Validators.required])

    })
        console.log(this.addAppointmentForm.value);

  }
  onSubmit() {
    console.log(this.addAppointmentForm.value);
    this.http.post("http://localhost:8080/appointment/add-appointment", this.addAppointmentForm.value).subscribe(data => {
      console.log(  data);
      Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your Sign Up Successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
    });
    this.addAppointmentForm.reset();
  }

}
