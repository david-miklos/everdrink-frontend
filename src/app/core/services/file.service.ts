import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { NotificationService } from './notification.service';

const baseUrl = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class FileService {
  private token: string = null;
  // image: string | ArrayBuffer | null = null;
  imagePath: string = null;
  constructor(
    private http: HttpClient,
    private router: Router,
    private ns: NotificationService,
    private authService: AuthService,
    private sanitizer: DomSanitizer
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
          this.ns.show('Sikeres filefeltöltés!');
        },
        (error) => {
          this.ns.show('HIBA! Nem sikerült a filefeltöltés!');
          console.error(error);
        }
      );
  }

  constructUrl(id: string): void {
    this.imagePath = `${baseUrl}/user/${id}.png/getfile`;
    console.log(this.imagePath);
  }

  // getFile(userId: string): void {
  //   const header = new HttpHeaders().set(
  //     'Authorization',
  //     `Bearer ${this.token}`
  //   );
  //   const filepath = `${userId}.png`;
  //   this.http
  //     .get(`${baseUrl}/user/${filepath}/getfile`, {
  //       headers: header,
  //       responseType: 'blob',
  //     })
  //     .subscribe(
  //       (data) => {
  //         this.ns.show('Sikeres filelekeres!');
  //         console.log(data);
  //         console.log(typeof data);
  //         this.createImageFromBlob(data);
  //       },
  //       (error) => {
  //         this.ns.show('HIBA! Nem sikerült a filefeltöltés!');
  //         console.error('oops', error);
  //       }
  //     );
  // }

  // createImageFromBlob(image: Blob): void {
  //   const reader = new FileReader();
  //   reader.addEventListener(
  //     'load',
  //     () => {
  //       this.image = reader.result;
  //     },
  //     false
  //   );
  //   if (image) {
  //     reader.readAsDataURL(image);
  //   }
  // }
}
