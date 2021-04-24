import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { ProductsComponent } from './category/products/products.component';
import { CategoryComponent } from './category/category.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AddressComponent } from './address/address.component';

const routes: Routes = [
  { path: '', component: FrontpageComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'cart', component: CartComponent },
  { path: 'address', component: AddressComponent },
  {
    path: 'category',
    component: CategoryComponent,
    children: [
      {
        path: ':name',
        component: ProductsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
