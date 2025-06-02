import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthServiceService } from '../../service/auth-service.service';

@Component({
  selector: 'app-login-page',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent implements OnInit {

  constructor(private authService: AuthServiceService, private router: Router) {

  }
  loginFormGroup !: FormGroup;

  ngOnInit(): void {
    this.loginFormGroup = new FormGroup({
      'username': new FormControl(null, [Validators.required]),
      'password': new FormControl(null, [Validators.required])
    })
  }

  onLogin() {
    console.log(this.loginFormGroup.value);
    this.authService.login(this.loginFormGroup.value).subscribe({
      next: (res) => {
        if (res.error) {
          alert(res.error);
        } else {
          this.router.navigate(['/dashboard/dashboard-page']);
          this.loginFormGroup.reset();
        }
      }

    })
  }
}
