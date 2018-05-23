import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListItemsComponent } from './containers/list-items/list-items.component';
import { AddItemComponent } from './containers/add-item/add-item.component';

const itemsRoutes: Routes = [
  {path: '', redirectTo: '/items/list', pathMatch: 'full'},
  {path: 'list', component: ListItemsComponent},
  {path: 'add', component: AddItemComponent}
];

@NgModule({
  imports: [RouterModule.forChild(itemsRoutes)],
  exports: [RouterModule],
})
export class ItemsRoutingModule {

}
