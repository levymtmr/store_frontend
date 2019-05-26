import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FormVendasComponent } from "./form-vendas/form-vendas.component";
import { ContasComponent } from "./contas/contas.component";
import { AppComponent } from "./app.component";
import { ErrorsModule } from "./errors/errors.module";
import { PrincipalComponent } from "./principal/principal.component";
import { EstoqueComponent } from "./estoque/estoque.component";
import { ProdutosComponent } from "./produtos/produtos.component";
import { ClientesComponent } from "./clientes/clientes.component";

const routes: Routes = [
  { path: "vendas", component: FormVendasComponent },
  { path: "contas", component: ContasComponent },
  { path: "home", component: PrincipalComponent },
  { path: "estoque", component: EstoqueComponent },
  { path: "produtos", component: ProdutosComponent },
  { path: "clientes", component: ClientesComponent },
  { path: "principal", component: PrincipalComponent },
  { path: "contas", component: ContasComponent }
  // { path: "**", component: ErrorsModule }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
