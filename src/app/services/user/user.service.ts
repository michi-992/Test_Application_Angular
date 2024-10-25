import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../../models/user/user.model'


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8080/api/testdb';
  constructor(private http: HttpClient) { }

  getUser() {
    return this.http.get<User>(this.apiUrl);
  }
}
