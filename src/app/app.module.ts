import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { AccordionModule } from "ngx-bootstrap/accordion";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { SidebarModule } from "ng-sidebar";
import { AngularFontAwesomeModule } from "angular-font-awesome";
import { FormVendasComponent } from "./form-vendas/form-vendas.component";
import { ContasComponent } from "./contas/contas.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { NotFoundComponent } from "./errors/not-found/not-found.component";
import { ErrorsModule } from "./errors/errors.module";
import { PrincipalComponent } from "./principal/principal.component";
import { EstoqueComponent } from "./estoque/estoque.component";
import { ProdutosComponent } from "./produtos/produtos.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
@NgModule({
  declarations: [
    AppComponent,
    FormVendasComponent,
    ContasComponent,
    NavbarComponent,
    PrincipalComponent,
    EstoqueComponent,
    ProdutosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    // ErrorsModule,
    TooltipModule.forRoot(),
    AccordionModule.forRoot(),
    SidebarModule.forRoot(),
    AngularFontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
