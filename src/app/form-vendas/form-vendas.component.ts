import { Component, OnInit } from "@angular/core";
import { ProductService } from "../services/products";

@Component({
  selector: "app-form-vendas",
  templateUrl: "./form-vendas.component.html",
  styleUrls: ["./form-vendas.component.scss"]
})
export class FormVendasComponent implements OnInit {
  products: any;

  constructor(private product: ProductService) {}

  ngOnInit() {
    this.get_name_products();
  }

  get_name_products() {
    this.product.getProducts().subscribe(products => {
      this.products = products;
    });
  }
}
