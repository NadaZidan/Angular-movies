import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule}from'@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MoviesComponent } from './movies/movies.component';
import { AboutComponent } from './about/about.component';
import { TvComponent } from './tv/tv.component';
import { PeopleComponent } from './people/people.component';
import {HttpClientModule} from '@angular/common/http';
import { SeemorePipe } from './seemore.pipe';
import { SearchPipe } from './search.pipe';
import { ReactiveFormsModule } from '@angular/forms';

import { from } from 'rxjs';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { SendMessageComponent } from './reviews/send-message/send-message.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactsComponent,
    NavbarComponent,
    MoviesComponent,
    AboutComponent,
    TvComponent,
    PeopleComponent,
    SeemorePipe,
    SearchPipe,
    MoviedetailsComponent,
    SendMessageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
