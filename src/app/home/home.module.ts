import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { PaginatorModule } from 'ngx-paginator';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PaginatorModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
