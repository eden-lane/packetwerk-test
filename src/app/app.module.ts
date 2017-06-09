import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { UserService } from './services/user.service';

import { AppComponent } from './app.component';
import { UserListComponent } from './components/users/user-list/user-list.component'

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent
  ],
  imports: [
    HttpModule,
    BrowserModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
