import { Component, OnInit } from "@angular/core";
import { ProductService } from "../services/products";
import { SellService } from "../services/sell.service";

@Component({
  selector: "app-form-vendas",
  templateUrl: "./form-vendas.component.html",
  styleUrls: ["./form-vendas.component.scss"]
})
export class FormVendasComponent implements OnInit {
  products: any;
  sellProducts: any;
  clients: any;

  constructor(
    private product: ProductService,
    private sellProduct: SellService
  ) {}

  ngOnInit() {
    this.get_name_products();
    this.getProdutosVendidos();
    this.getClientesForSell();
  }

  get_name_products() {
    this.product.getProducts().subscribe(products => {
      this.products = products;
    });
  }

  getProdutosVendidos() {
    this.sellProduct.getProductSells().subscribe(sellProducts => {
      this.sellProducts = sellProducts;
      console.log("chamando", sellProducts);
    });
  }

  getClientesForSell() {
    this.sellProduct.getClients().subscribe(clients => {
      this.clients = clients;
    });
  }
}
