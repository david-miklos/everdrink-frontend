import { Component, OnInit } from '@angular/core';
import { FileService } from '@core/services/file.service';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss'],
})
export class FileComponent implements OnInit {
  fileToUpload: File = null;

  constructor(public fileService: FileService) {}

  ngOnInit(): void {}

  handleFileInput(files: FileList): void {
    this.fileToUpload = files.item(0);
  }

  onUpload(): void {
    console.log(this.fileToUpload);
    this.fileService.uploadFile(this.fileToUpload);
  }
}
