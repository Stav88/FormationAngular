import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItemsComponent } from './containers/list-items/list-items.component';
import { AddItemComponent } from './containers/add-item/add-item.component';
import { ItemsRoutingModule } from './items-routing.module';
import { ItemComponent } from './components/item/item.component';

@NgModule({
  imports: [
    CommonModule,
    ItemsRoutingModule
  ],
  declarations: [ListItemsComponent, AddItemComponent, ItemComponent],
  exports: []
})
export class ItemsModule { }
