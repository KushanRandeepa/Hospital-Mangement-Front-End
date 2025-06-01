// import { TestBed } from '@angular/core/testing';
// import { CanActivateFn } from '@angular/router';

import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from "@angular/router";
import { AuthServiceService } from "../service/auth-service.service";
import { Injectable } from "@angular/core";


@Injectable({
  providedIn: 'root'})
  
export class AuthGuardService implements CanActivate{
constructor(private authservice :AuthServiceService,private router:Router){

}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean {
 
    return true;
  }

}