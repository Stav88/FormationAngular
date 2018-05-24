import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { StateDirective } from './state.directive';
import { UserIdDirective } from './user-id.directive';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    RouterModule
  ],
  declarations: [MenuComponent, StateDirective, UserIdDirective],
  exports: [MenuComponent, StateDirective, UserIdDirective]
})
export class SharedModule { }
