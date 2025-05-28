import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { ApiResponse } from '../../models/ApiResponse.model';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-signup-page',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './signup-page.component.html',
  styleUrl: './signup-page.component.css'
})
export class SignupPageComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) {

  }

  signUpFormGroup!: FormGroup

  ngOnInit(): void {
    this.signUpFormGroup = new FormGroup({
      'username': new FormControl(null, [Validators.required]),
      'email': new FormControl(null, [Validators.required]),
      'password': new FormControl(null, [Validators.required]),
      'role': new FormControl(null)
    })


  }

  onSubmit() {
    this.http.post<ApiResponse>('http://localhost:8080/signup', this.signUpFormGroup.value)
      .subscribe({
        next: (res) => {
          if (res.error) {
            alert(res.error); // or use Swal
          } else {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your Sign Up Successfully",
              showConfirmButton: false,
              timer: 1500
            });
            this.router.navigate(['/login']);
            this.signUpFormGroup.reset();
          }
        },
        error: (err) => {
          alert("Something went wrong!");
        }
      }
      );
  }


  
}

