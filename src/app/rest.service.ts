import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { student } from './student';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  get: any;

  constructor(private http:HttpClient) { }

  url: string="http://localhost:3000/student"
  getUsers(){
    return this.http.get<student[]>(this.url)
  }
}
