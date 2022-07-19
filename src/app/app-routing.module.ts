import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { ProductItemComponent } from './component/view-products/product-item/product-item/product-item.component';
import { ViewProductsComponent } from './component/view-products/view-products.component';

const routes: Routes = [
  {path: 'register', component:RegisterComponent},
  {path: 'login', component:LoginComponent},
  {path: 'shop', component:ViewProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
