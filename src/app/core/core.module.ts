import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionService } from './collection.service';
import { JsonplaceholderService } from './jsonplaceholder.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    CollectionService,
    JsonplaceholderService
  ]
})
export class CoreModule { }
