import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListItemsComponent} from './containers/list-items/list-items.component';
import {AddItemComponent} from './containers/add-item/add-item.component';
import {ItemsRoutingModule} from './items-routing.module';
import {ItemComponent} from './components/item/item.component';
import {SharedModule} from '../shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ItemsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [ListItemsComponent, AddItemComponent, ItemComponent],
  exports: []
})
export class ItemsModule {
}
