import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private authToken = 'auth token '

  constructor(private http: HttpClient, private router: Router) {

  }

  loogin(loginDetail: any) {
    return this.http.post<any>('http://localhost:8080/login', loginDetail).pipe(
      tap((res: any) => {
        localStorage.setItem(this.authToken, res.token)
        }
     )
    );
  }

  get getToken():string | null {
    return localStorage.getItem(this.authToken);
  }
}