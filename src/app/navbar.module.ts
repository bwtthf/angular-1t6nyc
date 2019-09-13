import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { navbarComponent } from './navbar.components';
import { StudentListComponent } from './student-list.component';
import { teacherListComponent } from './teacher-list.component'; 



@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, navbarComponent, StudentListComponent, teacherListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }