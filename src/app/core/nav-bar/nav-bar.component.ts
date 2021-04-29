
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/basket/basket.service';
import { Observable } from 'rxjs';
import { ICart } from 'src/app/shared/models/basket';
import { IUser } from 'src/app/shared/models/user';
import { AccountService } from 'src/app/account/account.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  basket$: Observable<IBasket>;
  currentUser$: Observable<IUser>;

  constructor(private cartervice: cartService, private accountService: AccountService) { }

  ngOnInit() {
    this.cart$ = this.cartService.basket$;
    this.currentUser$ = this.accountService.currentUser$;
  }

  logout() {
    this.accountService.logout();
  }

}
