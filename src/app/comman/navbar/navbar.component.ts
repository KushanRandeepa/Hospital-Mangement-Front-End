import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthServiceService } from '../../service/auth-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private authService: AuthServiceService) {

  }

  logout() {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Logout"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Logout!",
          text: "You have been logged out successfully.",
          position: "top-end",
          icon: "success"
        });
         this.authService.logout();
      }
    });
   
  }
}
