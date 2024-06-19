import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { ContactPageComponent } from './shared/pages/contact-page/contact-page.component';

const routes: Routes = [
  {
    path: 'countries',
    loadChildren: () => import('./countries/countries-rounting.module').then( m => m.CountriesRoutingModule), // lazyloading
  },
  {
    path:'**',
    redirectTo: 'by-capital'
  }
]

@NgModule({
  imports:[
    RouterModule.forRoot( routes )
  ],
  exports:[
    RouterModule
  ]
})

export class AppRoutingModule { }

// llamadas http
// obseravdores angular
 
