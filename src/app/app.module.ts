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
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

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
	import { ProductsComponent } from './products/products.component';
		import { ProductComponent } from './product/product.component';
	import { ContactComponent } from './contact/contact.component';
	import { SigninComponent } from './signin/signin.component';
	import { SignupComponent } from './signup/signup.component';
	import { OrdersComponent } from './admin/orders/orders.component';
	import { UsersComponent } from './admin/users/users.component';

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
			ProductsComponent,
				ProductComponent,
			ContactComponent,
			SigninComponent,
			SignupComponent,
			ContactComponent,
			OrdersComponent,
			UsersComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		ReactiveFormsModule,
		AngularFireModule.initializeApp(environment.firebase),
		AngularFirestoreModule,
		StoreModule.forRoot({
			forms: formReducer
		}),
		MatCardModule,
		MatIconModule,
		MatButtonModule,
		MatFormFieldModule,
		MatInputModule,
		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
