import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { environment } from '../environments/environment';

const appRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'items', loadChildren: './items/items.module#ItemsModule'}

  // {path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {
    enableTracing: !environment.production,
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {

}
