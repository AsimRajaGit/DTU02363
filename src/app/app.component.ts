import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'JaDes Design';
  
  constructor {private http: HttpClient} {}

  ngOnInit{}: void {
     this.http.get('http://localhost:5001/api/products').subscribe((response:any) => {
       console function(error:any): void
  },     error => {
         console.log.{error};
     });
}
