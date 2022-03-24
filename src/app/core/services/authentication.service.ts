import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Login } from 'src/app/shared/models/Login';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  login(userLogin: Login) : Observable<boolean> {

    // POST the email/password to API account/login
    return this.http.post(`${environment.apiBaseUrl}account/login`, userLogin)
      .pipe(
        map((response: any) => {
          if (response) {
            // email/pw is correct
            // store the token in local storage and return true
            localStorage.setItem('token', response.token)
          }
          return false;
        })
      )
  }

  logout() {

    // delete the token from local storage
    localStorage.removeItem('token');
  }
}
