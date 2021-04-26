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
import { formReducer } from '@core/reducers/form.reducer';
// import { ConnectFormDirective } from '@core/directives/connectform.directive';
import { NameFormatDirective } from '@core/directives/nameformat.directive';
import { PhoneFormatDirective } from '@core/directives/phoneformat.directive';
import { ObjectToArrayPipe } from '@core/pipes/objecttoarray.pipe';
import { PhoneFormatPipe } from '@core/pipes/phoneformat.pipe';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './header/menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { CategoriesComponent } from './categories/categories.component';
import { ContactComponent } from './contact/contact.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { OrdersComponent } from './admin/orders/orders.component';
import { UsersComponent } from './admin/users/users.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';

import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './products/product/product.component';
import { CartComponent } from './cart/cart.component';
import { ProductsInCartComponent } from './cart/products-in-cart/products-in-cart.component';
import { ProductInCartComponent } from './cart/products-in-cart/product-in-cart/product-in-cart.component';
import { MatPasswordStrengthModule } from '@angular-material-extensions/password-strength';
import { CartDetailComponent } from './cart/cart-detail/cart-detail.component';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { ROOT_REDUCERS } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { localStorageSync } from 'ngrx-store-localstorage';
import { AddressComponent } from './address/address.component';
import { MatSelectModule } from '@angular/material/select';
import { CategoryComponent } from './categories/category/category.component';

export function localStorageSyncReducer(
  reducer: ActionReducer<any>
): ActionReducer<any> {
  return localStorageSync({ keys: ['cart', 'auth'], rehydrate: true })(reducer);
  // return localStorageSync({ keys: ['cart'] })(reducer);
}
const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

@NgModule({
  declarations: [
    // ConnectFormDirective,
    NameFormatDirective,
    PhoneFormatDirective,
    ObjectToArrayPipe,
    PhoneFormatPipe,
    AppComponent,
    SignupComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    AddressComponent,
    FrontpageComponent,
    CategoriesComponent,
    CategoryComponent,
    ContactComponent,
    SigninComponent,
    ContactComponent,
    OrdersComponent,
    UsersComponent,
    ProductsComponent,
    ProductComponent,
    CartComponent,
    ProductsInCartComponent,
    ProductInCartComponent,
    CartDetailComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    // StoreModule.forRoot({
    //   forms: formReducer,
    // }),
    /**
     * StoreModule.forRoot is imported once in the root module, accepting a reducer
     * function or object map of reducer functions. If passed an object of
     * reducers, combineReducers will be run creating your application
     * meta-reducer. This returns all providers for an @ngrx/store
     * based application.
     */
    StoreModule.forRoot(ROOT_REDUCERS, { metaReducers }),

    /**
     * @ngrx/router-store keeps router state up-to-date in the store.
     */
    StoreRouterConnectingModule.forRoot(),

    /**
     * Store devtools instrument the store retaining past versions of state
     * and recalculating new states. This enables powerful time-travel
     * debugging.
     *
     * To use the debugger, install the Redux Devtools extension for either
     * Chrome or Firefox
     *
     * See: https://github.com/zalmoxisus/redux-devtools-extension
     */
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
    MatPasswordStrengthModule,
    MatExpansionModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
