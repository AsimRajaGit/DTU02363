import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ipagination } from '../models/pagination';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl = 'https://localhost:3000/api';

  constructor(private http:HttpClient) { }

getProducts() {
  return this.http.get<Ipagination>(this.baseUrl + 'products');
  }
}
