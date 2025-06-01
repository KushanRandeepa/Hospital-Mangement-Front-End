import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthServiceService } from '../../service/auth-service.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-root',
  imports: [RouterLink, RouterOutlet, RouterLinkActive, NgIf],
  templateUrl: './patient-root.component.html',
  styleUrl: './patient-root.component.css'
})
export class PatientRootComponent implements OnInit {
  constructor(private authService: AuthServiceService) { }
  role: string | null = null;
  ngOnInit(): void {
    this.role = this.authService.getUserRole();
  }
}
