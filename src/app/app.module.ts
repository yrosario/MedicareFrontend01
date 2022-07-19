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


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoffComponent,
    RegisterComponent,
    NavbarComponent,
    FooterComponent,
    ViewProductsComponent,
    ProductItemComponent
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
