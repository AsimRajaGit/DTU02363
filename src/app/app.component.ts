import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Iproduct} from './models/product';
import {Ipagination} from './models/pagination';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'JaDes Design';
  products: any[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
     this.http.get('https://localhost:5001/api/products').subscribe((response: Ipagination) => {
       this.products = response.data;
      }, error => {
         console.log(error);
     });
    }
}
