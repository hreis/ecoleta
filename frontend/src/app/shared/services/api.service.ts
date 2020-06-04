import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(HttpClient) { }

  api = axios.create({
    baseURL: 'http://localhost:3333'
  });

}
