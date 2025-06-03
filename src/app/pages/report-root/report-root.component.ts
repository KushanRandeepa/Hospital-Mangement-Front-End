import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AuthServiceService } from '../../service/auth-service.service';

@Component({
  selector: 'app-report-root',
  imports: [RouterLink,RouterOutlet,FormsModule,CommonModule],
  templateUrl: './report-root.component.html',
  styleUrl: './report-root.component.css'
})
export class ReportRootComponent {
  role:string |null=null;
  constructor(private authService :AuthServiceService){
    this.role=this.authService.getUserRole();
  }

}
