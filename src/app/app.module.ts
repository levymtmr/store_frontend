import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { AccordionModule } from "ngx-bootstrap/accordion";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { SidebarModule } from "ng-sidebar";
import { AngularFontAwesomeModule } from "angular-font-awesome";
import { FormVendasComponent } from "./form-vendas/form-vendas.component";
import { ContasComponent } from "./contas/contas.component";

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    FormVendasComponent,
    ContasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    TooltipModule.forRoot(),
    AccordionModule.forRoot(),
    SidebarModule.forRoot(),
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
