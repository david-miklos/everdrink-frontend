import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderInCartComponent } from './order-in-cart.component';

describe('OrderInCartComponent', () => {
  let component: OrderInCartComponent;
  let fixture: ComponentFixture<OrderInCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderInCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderInCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
