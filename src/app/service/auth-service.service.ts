import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { jwtDecode } from 'jwt-decode';

export interface DecodedToken {
  sub: string;
  roles: string[];
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

  loogin(loginDetail: any) {
    return this.http.post<any>('http://localhost:8080/login', loginDetail).pipe(
      tap((res: any) => {
        const token = res.token;
        localStorage.setItem(this.authToken, res.token)
       const decoded: any = jwtDecode(token);
        console.log('✅ Logged in user role:', decoded.roles?.[0]);
      }
      )
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
        console.error('❌ Token decoding failed', e);
        return null;
      }
    }
    return null;
  }

 getUserRole(): string | null {
    const token = this.getToken;
    if (token) {
      try {
        const decoded: any = jwtDecode(token);
        console.log('✅ Decoded token:', decoded);
        return decoded.roles?.[0] || null;
      } catch (e) {
        console.error('❌ Failed to decode token for role', e);
        return null;
      }
    }
    return null;
  }


}