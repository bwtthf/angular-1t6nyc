import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { navbarComponent } from './navbar.components';
import { HomeComponent } from './Home/home.components';

const routes: Routes = [
  { path: '', component: HomeComponent },
  
]
