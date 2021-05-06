import { Component, Input, OnInit } from '@angular/core';
import { Order } from '@core/interfaces/order.interface';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  @Input() orders: Order[];

  constructor() { }

  ngOnInit(): void {
  }

}
