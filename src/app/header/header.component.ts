import { ThrowStmt } from '@angular/compiler';
import { Component, DoCheck, Input, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { Router } from '@angular/router';
import { CartService } from '@core/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, DoCheck {
  // tslint:disable-next-line:no-input-rename
  @Input('matBadge') content: string | number | undefined | null;
  // tslint:disable-next-line:no-input-rename
  @Input('matBadgeHidden') hidden = true;

  constructor(public cartService: CartService, private router: Router) {}

  ngOnInit(): void {}

  ngDoCheck(): void {
    if (this.router.url === '/cart') {
      this.hidden = true;
      return;
    }
    this.content = this.cartService.products$.getValue().length;
    if (this.cartService.products$.getValue().length > 0) {
      this.hidden = false;
    }
  }
}
