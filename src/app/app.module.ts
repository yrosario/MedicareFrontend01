import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { LogoffComponent } from './component/logoff/logoff/logoff.component';
import { RegisterComponent } from './component/register/register.component';
import { NavbarComponent } from './component/navigation/navbar/navbar.component';
import { FooterComponent } from './component/navigation/footer/footer.component';
import { ViewProductsComponent } from './component/view-products/view-products.component';
import { ProductItemComponent } from './component/view-products/product-item/product-item/product-item.component';
import { CartComponent } from './component/cart/cart.component';
import { BillSummaryComponent } from './component/cart/bill-summary/bill-summary.component';
import { AdminComponent } from './component/admin/admin.component';
import { ManageUserComponent } from './component/admin/manage-user/manage-user.component';
import { EditUserComponent } from './component/admin/manage-user/edit-user/edit-user.component';
import { ManageProductComponent } from './component/admin/manage-product/manage-product.component';
import { EditProductComponent } from './component/admin/manage-product/edit-product/edit-product.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoffComponent,
    RegisterComponent,
    NavbarComponent,
    FooterComponent,
    ViewProductsComponent,
    ProductItemComponent,
    CartComponent,
    BillSummaryComponent,
    AdminComponent,
    ManageUserComponent,
    EditUserComponent,
    ManageProductComponent,
    EditProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
