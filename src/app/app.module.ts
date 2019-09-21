import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { AccordionModule } from 'ngx-bootstrap/accordion';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SidebarModule } from 'ng-sidebar';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ModalLoginComponent } from './modals/modal-login/modal-login.component';
import { SellsComponent } from './sells/sells.component';
<<<<<<< HEAD
import { ModalMakeSellsComponent } from './modals/modal-make-sells/modal-make-sells.component';
import { ModalQuantityComponent } from './modals/modal-quantity/modal-quantity.component';
=======
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
>>>>>>> 4da296e0d97711c620e49a28c16ab9b75e51176b

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductsComponent,
    LoginComponent,
    SidebarComponent,
    ModalLoginComponent,
    SellsComponent,
    ModalMakeSellsComponent,
    ModalQuantityComponent
  ],
  entryComponents: [ModalLoginComponent, ModalMakeSellsComponent, ModalQuantityComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TooltipModule.forRoot(),
    AccordionModule.forRoot(),
    SidebarModule.forRoot(),
    AngularFontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    ModalModule.forRoot(),
    TypeaheadModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
