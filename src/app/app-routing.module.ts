import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowComponent } from './show/show.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"",
    component:ShowComponent
    

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
