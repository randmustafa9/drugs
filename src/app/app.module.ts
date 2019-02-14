import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import {APP_BASE_HREF} from '@angular/common';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FormsModule } from '@angular/forms';
import { CommentsComponent } from './comments/comments.component';
import { Comments2Component } from './comments2/comments2.component';
import { Comments3Component } from './comments3/comments3.component';
import { Comments4Component } from './comments4/comments4.component';
import { Comments5Component } from './comments5/comments5.component';
import { Comments6Component } from './comments6/comments6.component';
import { Comments7Component } from './comments7/comments7.component';
import { Comments8Component } from './comments8/comments8.component';
import { Comments9Component } from './comments9/comments9.component';
import { Comments10Component } from './comments10/comments10.component';


import {LocationStrategy, HashLocationStrategy} from '@angular/common';

import { SomePipe } from './users/pipe.component';

const routes:Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent },
  {path:'users', component:UsersComponent},
  {path:'comments', component:CommentsComponent},
  {path:'comments2', component:Comments2Component},
  {path:'comments3', component:Comments3Component},
  {path:'comments4', component:Comments4Component},
  {path:'comments5', component:Comments5Component},
  {path:'comments6', component:Comments6Component},
  {path:'comments7', component:Comments7Component},
  {path:'comments8', component:Comments8Component},
  {path:'comments9', component:Comments9Component},
  {path:'comments10', component:Comments10Component},

] 

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    HomeComponent,
    CommentsComponent,
    Comments2Component,
    Comments3Component,
    Comments4Component,
    Comments5Component,
    Comments6Component,
    Comments7Component,
    Comments8Component,
    Comments9Component,
    Comments10Component,
    SomePipe,

  ],
  imports: [
    BrowserModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot(routes, { useHash: true }),
    FormsModule,
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
  

})
export class AppModule { }
