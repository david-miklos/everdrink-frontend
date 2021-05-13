import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Address } from '@core/interfaces/address.interface';
import { AddressResponse } from '@core/interfaces/address.response.interface';
import { AuthService } from './auth.service';
import { NotificationService } from './notification.service';

const baseUrl = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class AddressService {
  public userAddresses: AddressResponse[];
  public adminAddresses: AddressResponse[];
  private token: string = null;
  private userId: string = null;

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private ns: NotificationService
  ) {
    this.authService.auth$.subscribe((data) => {
      this.token = data.access_token;
      this.userId = data.payload.id;
    });
  }

  addAddress(address: Address): void {
    const header = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.token}`
    );
    this.http.post<Address>(`${baseUrl}/address/create`, address, { headers: header }).subscribe(
      (data) => {
        this.ns.show('Sikeresen rögzítettük szállítási adatait!');
      },
      (error) => {
        this.ns.show('HIBA! Nem sikerült rögzíteni szállítási adatait!');
        console.error(error);
      }
    );
  }

  getUserAddresses(): void {
    const header = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.token}`
    );
    this.http
    .get<AddressResponse[]>(`${baseUrl}/address/${this.userId}/user`, { headers: header })
    .subscribe(
      (data) => {
        this.userAddresses = data;
      },
      (error) => {
        this.ns.show('HIBA! Cim lekerese sikertelen!');
        console.error(error);
      }
    );
  }

  getAdminAddresses(): void {
    const header = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.token}`
    );
    this.http
    .get<AddressResponse[]>(`${baseUrl}/address/admin`, { headers: header })
    .subscribe(
      (data) => {
        this.adminAddresses = data;
      },
      (error) => {
        this.ns.show('HIBA! Cim lekerese sikertelen!');
        console.error(error);
      }
    );
  }
}
