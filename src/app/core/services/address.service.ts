import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Address } from '@core/interfaces/address.interface';
import { NotificationService } from './notification.service';

const baseUrl = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class AddressService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private ns: NotificationService
  ) {}

  addAddress(address: Address): void {
    this.http.post<Address>(`${baseUrl}/address/create`, address).subscribe(
      (data) => {
        this.router.navigate(['']);
        this.ns.show('Sikeresen rögzítettük szállítási adatait!');
        console.log(data);
      },
      (error) => {
        this.ns.show('HIBA! Nem sierült rögzíteni szállítási adatait!');
        console.error('oops', error);
      }
    );
  }
}
