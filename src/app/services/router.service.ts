import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class RouterService {
  public VENDA_PATH = "vendas";
  public static VENDA_PATH = "vendas";

  public COMPRA_PATH = "compra";
  public static COMPRA_PATH = "compra";

  public PRODUTO_PATH = "produto";
  public static PRODUTO_PATH = "produto";

  public LOGIN_PATH = "login";
  public static LOGIN_PATH = "login";

  constructor(private router: Router) {}

  to(path) {
    this.router.navigate([path]);
  }
}
