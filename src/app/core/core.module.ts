import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationService } from './services/notification.service';
import { AuthService } from './services/auth.service';
import { CategoryService } from './services/category.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [AuthService, NotificationService, CategoryService],
})
export class CoreModule {}
