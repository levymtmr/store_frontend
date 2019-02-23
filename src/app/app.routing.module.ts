import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { FormVendasComponent } from "./form-vendas/form-vendas.component";
import { ContasComponent } from "./contas/contas.component";

const routes: Routes = [
  { path: "vendas", component: FormVendasComponent },
  { path: "contas", component: ContasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}
