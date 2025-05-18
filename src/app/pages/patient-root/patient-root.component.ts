import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-patient-root',
  imports: [RouterLink,RouterOutlet,RouterLinkActive],
  templateUrl: './patient-root.component.html',
  styleUrl: './patient-root.component.css'
})
export class PatientRootComponent {

}
