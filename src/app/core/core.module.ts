import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionService } from './collection.service';
import { JsonplaceholderService } from './jsonplaceholder.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  declarations: [],
  providers: [
    CollectionService,
    JsonplaceholderService
  ]
})
export class CoreModule { }
