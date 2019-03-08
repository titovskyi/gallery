import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImageMainComponent } from './components/image-main/image-main.component';
import { FavouriteImagesComponent } from './components/favourite-images/favourite-images.component';

const routes: Routes = [
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  {path: 'main', component: ImageMainComponent},
  {path: 'favourite', component: FavouriteImagesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
