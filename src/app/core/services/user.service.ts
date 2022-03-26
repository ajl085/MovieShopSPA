import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Purchases } from 'src/app/shared/models/Purchases';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUserPurchases(): Observable<Purchases> {
    
    return this.http.get<Purchases>(`${environment.apiBaseUrl}user/purchases`)
  }
}
