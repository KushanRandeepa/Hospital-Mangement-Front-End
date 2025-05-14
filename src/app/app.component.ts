import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./comman/navbar/navbar.component";
import { initFlowbite } from 'flowbite';

import { LoginPageComponent } from './pages/login-page/login-page.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Hospital-Mangement-Front-End';

  ngOnInit(): void {
    initFlowbite();
  }
}
