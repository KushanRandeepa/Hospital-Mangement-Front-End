import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-appointment-root',
  imports: [RouterLink,RouterOutlet],
  templateUrl: './appointment-root.component.html',
  styleUrl: './appointment-root.component.css'
})
export class AppointmentRootComponent {

}
