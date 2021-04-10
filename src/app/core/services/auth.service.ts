/*
// EZ CSAK MINTA! (újra kell írni)

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { FirestoreService } from '@core/services/firestore.service';
import { NotificationService } from '@core/services/notification.service';

// import { SignupDialogComponent } from './../../signup/signup.component';

// import { User } from '@core/interfaces/user.interface';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	user$: Observable<User>;

	email: string = null;
	password: string = null;

	constructor(
		private router: Router,
		private afAuth: AngularFireAuth,
		private afs: AngularFirestore,
		public dialog: MatDialog,
		private fs: FirestoreService,
		private ns: NotificationService
	) {
		this.user$ = this.afAuth.authState.pipe(
			switchMap(user => {
				if (user) {
					return this.fs.doc$<User>(`users/${user.uid}`);
				} else {
					return of(null);
				}
			})
		);
		this.user$.subscribe(user => {
			if (user) {
				this.fs.doc$(`accounts/${user.account}`).subscribe(account => {
					if (account) {
						account['connections'].map(connection => {
							this.fs.doc$(`properties/${connection.property}`).subscribe(property => {
								connection.name = property['name'];
							});
						});
					}
					else {
						const dialogRef = this.dialog.open(SignupDialogComponent, {
							width: '800px',
							disableClose: true,
							data: {email: this.email, password: this.password, uid: user.uid}
						});
					}
				});
			}
		});
	}

	public signUp(email: string, password: string, name: string = null): Promise<string> {
		this.email = email;
		this.password = password;
		let displayName: string = null;
		return new Promise((resolve, reject) => {
			this.afAuth.auth.createUserWithEmailAndPassword(email, password)
			.then((credential: firebase.auth.UserCredential) => {
				//this.SendVerificationMail(); // TODO: E-mail ellenőrzés szerveroldal fejlesztése.
				displayName = credential.user.displayName ? credential.user.displayName : name;
				this.updateUserData(credential.user, displayName)
				.then(() => {
					this.signOut(false);
					return resolve(credential.user.uid);
				})
				.catch(error => {
					this.signOut(false);
					console.error(error);
					return reject(error);
				});
			})
			.catch(error => {
				this.ns.show(this.convertError(error.code));
				this.signOut(false);
				console.error(error);
				return reject(error);
			});
		});
	}

	public signIn(email: string, password: string): void {
		this.afAuth.auth.signInWithEmailAndPassword(email, password)
		.then(() => {
			this.router.navigate(['/property']);
			this.ns.show('Sikeres bejelentkezés!');
		})
		.catch(error => {
			this.ns.show(this.convertError(error.code));
			console.error(error);
		});
	}

	public signOut(notification: boolean = true): void {
		this.afAuth.auth.signOut()
		.then(() => {
			this.router.navigate(['/']);
			if (notification) this.ns.show('Sikeres kijelentkezés!');
		})
		.catch(error => {
			this.ns.show(this.convertError(error.code));
			console.error(error);
		});
	}

	private async updateUserData(user, name): Promise<void> {
		try {
			const userData: User = {
				uid: user.uid,
				email: user.email,
				name: name,
				roles: null,
				account: null
			}
			await this.fs.set(`users/${user.uid}`, <User>userData)
			this.ns.show('Felhasználó mentése sikeres!');
		} catch (error) {
			this.ns.show('HIBA! Felhasználó mentése sikertelen!');
			console.error(error);
		}
	}

	private SendVerificationMail(): Promise<void>  {
		return this.afAuth.auth.currentUser.sendEmailVerification()
		.catch(error => {
			this.ns.show(this.convertError(error.code));
			console.error(error);
		});
	}

	private convertError(code: string): string {
		console.log('CONVERT:');
		console.log(code);
		switch (code) {
			case 'auth/email-already-in-use':
				return 'Az E-mail cím már foglalt, válasszon másikat!';
			case 'auth/user-not-found':
				return 'Megadott E-mail címmel felhasználó nem található!';
			case 'auth/wrong-password':
				return 'Hibás jelszó!';
			default:
				return 'HIBA! Próbálkozzon újra később!';
		}
	}

}
*/
