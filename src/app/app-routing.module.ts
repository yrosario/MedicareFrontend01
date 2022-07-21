import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillSummaryComponent } from './component/cart/bill-summary/bill-summary.component';
import { CartComponent } from './component/cart/cart.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { ProductItemComponent } from './component/view-products/product-item/product-item/product-item.component';
import { ViewProductsComponent } from './component/view-products/view-products.component';

const routes: Routes = [
  {path: 'register', component:RegisterComponent},
  {path: 'login', component:LoginComponent},
  {path: 'shop', component:ViewProductsComponent},
  {path: 'shop/product/:id', component: ProductItemComponent},
  {path: 'cart', component: CartComponent},
  {path: 'cart/bill-summary', component: BillSummaryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
