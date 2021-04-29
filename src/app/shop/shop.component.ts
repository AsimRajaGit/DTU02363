import { Component, OnInit } from '@angular/core';
import { Iproduct } from '..shared/models/products';
import { ShopService } from './shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  products: Iproduct[];

  constructor() { }

  ngOnInit(): void {
    this.shopService.getProducts().subscribe(response => {
      this.products = respone.data;
    }, error =>(error);
  });

}
