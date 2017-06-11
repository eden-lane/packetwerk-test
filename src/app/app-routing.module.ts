import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersComponent } from './components/users/users.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { PhotosComponent } from './components/photos/photos.component';

const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full'},
  { path: 'users', component: UsersComponent },
  { path: 'users/:userId', component: AlbumsComponent },
  { path: 'users/:userId/albums/:albumId', component: PhotosComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}