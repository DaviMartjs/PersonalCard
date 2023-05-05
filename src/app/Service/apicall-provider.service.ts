import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UserProviderService {
  private baseUrl = 'https://gorest.co.in/'
  constructor(private http: HttpClient) { }

  getUsers() {
    
  }
  postUsers() {

  }
  putUsers() {

  }
  deleteUsers() {

  }
}
