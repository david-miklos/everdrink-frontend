import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { NotificationService } from './notification.service';

const baseUrl = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class FileService {
  private token: string = null;
  constructor(
    private http: HttpClient,
    private router: Router,
    private ns: NotificationService,
    private authService: AuthService
  ) {
    this.authService.auth$.subscribe((data) => {
      this.token = data.access_token;
    });
  }

  uploadFile(fileToUpload: File): void {
    const header = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.token}`
    );

    const formData: FormData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);

    this.http
      .post<File>(`${baseUrl}/user/upload`, formData, { headers: header })
      .subscribe(
        (data) => {
          // this.router.navigate(['']);
          this.ns.show('Sikeres filefeltöltés!');
          console.log(data);
        },
        (error) => {
          this.ns.show('HIBA! Nem sikerült a filefeltöltés!');
          console.error('oops', error);
        }
      );
  }

  getFile(userId: string): void {
    const header = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.token}`
    );
    const filepath = `${userId}.png`;
    this.http
      .get<File>(`${baseUrl}/user/${filepath}/getfile`, { headers: header })
      .subscribe(
        (data) => {
          this.ns.show('Sikeres filelekeres!');
          console.log(data.name);
        },
        (error) => {
          this.ns.show('HIBA! Nem sikerült a filefeltöltés!');
          console.error('oops', error);
        }
      );
  }
}
