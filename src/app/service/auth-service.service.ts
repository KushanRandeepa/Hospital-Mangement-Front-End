import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { jwtDecode } from 'jwt-decode';

export interface DecodedToken {
  sub: string;
  roles: string;
  iat?: number;
  exp?: number;
}

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private authToken = 'auth'

  constructor(private http: HttpClient, private router: Router) {

  }

  login(loginDetail: any) {
    return this.http.post<any>('http://localhost:8080/login', loginDetail).pipe(
      tap((res: any) => {
        const token = res.token;
        if (token) {
          localStorage.setItem(this.authToken, token);
          const decoded: DecodedToken = jwtDecode(token);
          console.log('✅ Logged in user role:', decoded.roles); // ✅ Now it's a string
        }
      })
    );
  }


  get getToken() {
    return localStorage.getItem(this.authToken);
  }

  isLoggedIn() {
    return !this.getToken;
  }

  getDecodedToken(): DecodedToken | null {
    const token = this.getToken;
    if (token) {
      try {
        return jwtDecode(token);
      } catch (e) {
        console.error(' Token decoding failed:', e);
        return null;
      }
    }
    return null;
  }


  getUserRole(): string | null {
    const decoded = this.getDecodedToken();
    return decoded?.roles || null;
  }


  logout(): void {
    localStorage.removeItem(this.authToken);
    this.router.navigateByUrl('/login').then(() => {
      window.history.pushState(null, '', window.location.href);
      window.onpopstate = () => {
        window.history.pushState(null, '', window.location.href);
      };
    });
  }

  getUserId(): string | null {
    const decoded = this.getDecodedToken();
    return decoded?.sub || null;
  }


}