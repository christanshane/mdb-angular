import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from '../products/products.component';
import { HomeComponent } from '../home/home.component';
import { ProductComponent } from '../product/product.component';
import { UserLoginComponent } from '../user-login/user-login.component';
import { UserSignupComponent } from '../user-signup/user-signup.component';

const routes:Routes = [
  {path:'', component:HomeComponent},
  {path:'products', component:ProductsComponent},
  {path:'product/:id', component:ProductComponent},
  {path:'login', component:UserLoginComponent},
  {path:'signup', component:UserSignupComponent},
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
