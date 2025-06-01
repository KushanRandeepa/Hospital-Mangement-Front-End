// import { Injectable } from '@angular/core';
// import { CanActivate, CanActivateFn, Router } from '@angular/router';
// import { AuthServiceService } from '../service/auth-service.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class RoleGuard implements CanActivate {

//   constructor(private authService: AuthServiceService, private router: Router) {}

//   canActivate(route: ActivatedRouteSnapshot): boolean {
//     const expectedRoles = route.data['roles'] as string[];
//     const userRoles = this.authService.getRoles();

//     const match = userRoles.some(role => expectedRoles.includes(role));
//     if (!match) {
//       this.router.navigate(['/unauthorized']); // Or show 403
//       return false;
//     }

//     return true;
//   }
// }
