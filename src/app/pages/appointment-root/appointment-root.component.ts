import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-appointment-root',
  imports: [RouterLink,RouterOutlet,RouterLinkActive],
  templateUrl: './appointment-root.component.html',
  styleUrl: './appointment-root.component.css'
})
export class AppointmentRootComponent {

}
