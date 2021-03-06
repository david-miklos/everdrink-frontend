import { Directive, EventEmitter, OnInit, OnDestroy, Input, Output } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/debounceTime';

import { AppState } from '@core/app.state';
import { SET_FORM } from '@core/reducers/form.reducer';

@Directive({
	selector: '[appConnectForm]'
})
export class ConnectFormDirective implements OnInit, OnDestroy {
	@Input('appConnectForm') path: string;
	@Input() debounce: number = 500;
	@Input() async: boolean = false;
	subscriptions: Subscription[] = [];

	constructor(
		private formGroupDirective: FormGroupDirective,
		private store: Store<AppState>
	) { }

	ngOnInit() {
		if (this.async) {
			this.subscriptions.push(
				this.store
					.select(state => state.forms[this.path])
					.subscribe(value => {
						if (value != undefined || value != null) this.formGroupDirective.form.patchValue(value, {emitEvent: false});
				})
			);
		}
		else {
			this.subscriptions.push(
				this.store
					.select(state => state.forms[this.path])
					.take(1)
					.subscribe(value => {
						if (value != undefined || value != null) this.formGroupDirective.form.patchValue(value, {emitEvent: false});
				})
			);
		}
		this.subscriptions.push(
			this.formGroupDirective.form.valueChanges
				.debounceTime(this.debounce)
				.subscribe(value => {
					this.store.dispatch({
						type: SET_FORM,
						payload: {
							value,
							path: this.path,
						}
					});
			})
		);
	}

	ngOnDestroy() {
		this.subscriptions.forEach((subscription: Subscription) => {
			subscription.unsubscribe();
		});
		this.subscriptions = [];
	}

}
