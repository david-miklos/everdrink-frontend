import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductbarComponent } from './productbar.component';

describe('ProductbarComponent', () => {
  let component: ProductbarComponent;
  let fixture: ComponentFixture<ProductbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
