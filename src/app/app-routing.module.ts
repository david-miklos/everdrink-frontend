import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { ProductsComponent } from './products/products.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AddressComponent } from './address/address.component';
import { CategoriesComponent } from './categories/categories.component';
import { FileComponent } from './file/file.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { UsersComponent } from './admin/users/users.component';
import { StepperComponent } from './stepper/stepper.component';
import { AddAddressComponent } from './add-address/add-address.component';
import { CheckoutsComponent } from './admin/checkouts/checkouts.component';

const routes: Routes = [
  { path: '', component: FrontpageComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'cart', component: CartComponent },
  { path: 'address', component: AddressComponent },
  { path: 'add-address', component: AddAddressComponent },
  { path: 'stepper', component: StepperComponent },
  { path: 'file', component: FileComponent },
  { path: 'users', component: UsersComponent },
  { path: 'checkouts', component: CheckoutsComponent },
  { path: 'categories', component: CategoriesComponent, },
  { path: 'products/:id', component: ProductsComponent, },
  { path: 'product-detail/:id', component: ProductDetailComponent, },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
