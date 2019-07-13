import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { AccordionModule } from 'ngx-bootstrap/accordion';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SidebarModule } from 'ng-sidebar';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormVendasComponent } from './form-vendas/form-vendas.component';
import { ContasComponent } from './contas/contas.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PrincipalComponent } from './principal/principal.component';
import { EstoqueComponent } from './estoque/estoque.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ClientesComponent } from './clientes/clientes.component';
import { FormVendasModalComponent } from './modals/form-vendas-modal/form-vendas-modal.component';

@NgModule({
  entryComponents:[ 
    FormVendasModalComponent
  ],
  declarations: [
    AppComponent,
    FormVendasComponent,
    ContasComponent,
    NavbarComponent,
    PrincipalComponent,
    EstoqueComponent,
    ProdutosComponent,
    ClientesComponent,
    FormVendasModalComponent
  ],
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
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
