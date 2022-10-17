import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ActionReducer, MetaReducer, StoreModule } from '@ngrx/store';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { MatExpansionModule } from '@angular/material/expansion';
import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './header/menu/menu.component';
import { CategoriesComponent } from './categories/categories.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { UsersComponent } from './admin/users/users.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './products/product/product.component';
import { CartComponent } from './cart/cart.component';
import { MatPasswordStrengthModule } from '@angular-material-extensions/password-strength';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { ROOT_REDUCERS } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { localStorageSync } from 'ngrx-store-localstorage';
import { AddressComponent } from './address/address.component';
import { MatSelectModule } from '@angular/material/select';
import { CategoryComponent } from './categories/category/category.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatStepperModule } from '@angular/material/stepper';
import { FileComponent } from './file/file.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { UserComponent } from './admin/users/user/user.component';
import { StepperComponent } from './stepper/stepper.component';
import { AddAddressComponent } from './add-address/add-address.component';
import { MatRadioModule } from '@angular/material/radio';
import { CheckoutComponent } from './admin/checkouts/checkout/checkout.component';
import { CheckoutsComponent } from './admin/checkouts/checkouts.component';
import { OrderInCartComponent } from './cart/orders-in-cart/order-in-cart/order-in-cart.component';
import { OrdersInCartComponent } from './cart/orders-in-cart/orders-in-cart.component';
import { OrdersComponent } from './admin/checkouts/checkout/orders/orders.component';
import { OrderComponent } from './admin/checkouts/checkout/orders/order/order.component';
import { AuthGuard } from '@core/guards/auth.guard';
import { RolesGuard } from '@core/guards/roles.guard';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';

export function localStorageSyncReducer(
  reducer: ActionReducer<any>
): ActionReducer<any> {
  return localStorageSync({ keys: ['cart', 'auth', 'users'], rehydrate: true })(
    reducer
  );
}
const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    AddressComponent,
    FrontpageComponent,
    CategoriesComponent,
    CategoryComponent,
    SignupComponent,
    SigninComponent,
    UsersComponent,
    ProductsComponent,
    ProductComponent,
    CartComponent,
    CheckoutsComponent,
    CheckoutComponent,
    OrdersInCartComponent,
    OrderInCartComponent,
    FileComponent,
    ProductDetailComponent,
    UserComponent,
    StepperComponent,
    AddAddressComponent,
    OrdersComponent,
    OrderComponent,
    FooterComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    StoreModule.forRoot(ROOT_REDUCERS, { metaReducers }),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({
      name: 'NgRx EverDrink - B2B App',
      // In a production build you would want to disable the Store Devtools
      // logOnly: environment.production,
    }),
    MatCardModule,
    MatIconModule,
    MatSelectModule,
    MatButtonModule,
    MatBadgeModule,
    MatMenuModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatInputModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatGridListModule,
    MatToolbarModule,
    MatStepperModule,
    MatPasswordStrengthModule,
    MatCheckboxModule,
    MatRadioModule,
    MatExpansionModule,
    HttpClientModule,
  ],
  providers: [AuthGuard, RolesGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
