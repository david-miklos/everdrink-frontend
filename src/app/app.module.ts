import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { StoreModule } from '@ngrx/store';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import {MatExpansionModule} from '@angular/material/expansion';

import { AppRoutingModule } from './app-routing.module';

import { formReducer } from '@core/reducers/form.reducer';
import { ConnectFormDirective } from '@core/directives/connectform.directive';
import { NameFormatDirective } from '@core/directives/nameformat.directive';
import { PhoneFormatDirective } from '@core/directives/phoneformat.directive';
import { ObjectToArrayPipe } from '@core/pipes/objecttoarray.pipe';
import { PhoneFormatPipe } from '@core/pipes/phoneformat.pipe';
import { DatePipe } from '@angular/common';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { CategoryComponent } from './category/category.component';
import { ContactComponent } from './contact/contact.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { OrdersComponent } from './admin/orders/orders.component';
import { UsersComponent } from './admin/users/users.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { ProductbarComponent } from './category/productbar/productbar.component';
import { ProductsComponent } from './category/products/products.component';
import { ProductComponent } from './category/products/product/product.component';
import { CartComponent } from './cart/cart.component';
import { ProductsInCartComponent } from './cart/products-in-cart/products-in-cart.component';
import { ProductInCartComponent } from './cart/products-in-cart/product-in-cart/product-in-cart.component';
import { MatPasswordStrengthModule } from '@angular-material-extensions/password-strength';

@NgModule({
  declarations: [
    ConnectFormDirective,
    NameFormatDirective,
    PhoneFormatDirective,
    ObjectToArrayPipe,
    PhoneFormatPipe,
    AppComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    FrontpageComponent,
    CategoryComponent,
    ContactComponent,
    SigninComponent,
    SignupComponent,
    ContactComponent,
    OrdersComponent,
    UsersComponent,
    ProductbarComponent,
    ProductsComponent,
    ProductComponent,
    CartComponent,
    ProductsInCartComponent,
    ProductInCartComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    StoreModule.forRoot({
      forms: formReducer,
    }),
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatBadgeModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatInputModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatGridListModule,
    MatToolbarModule,
    MatMenuModule,
    MatPasswordStrengthModule,
    MatExpansionModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
