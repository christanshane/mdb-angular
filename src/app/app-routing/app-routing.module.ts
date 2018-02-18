import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from '../products/products.component';
import { HomeComponent } from '../home/home.component';

const routes:Routes = [
  {path:'', component:HomeComponent},
  {path:'products', component:ProductsComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
