import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { UserLogin } from '../interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http = inject(HttpClient)
  private apiUrl = environment.apiUrl

  constructor() { }

  onLogin(userLogin:UserLogin):Observable<any>{
    return this.http.post(`${this.apiUrl}/login`,userLogin)
  }
}
