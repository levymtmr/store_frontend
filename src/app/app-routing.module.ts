import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { SellsComponent } from './sells/sells.component';

const routes: Routes = [
  { path: 'produtos', component: ProductsComponent },
  { path: '', component: LoginComponent },
  { path: 'vendas', component: SellsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
