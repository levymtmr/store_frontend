import { Component, OnInit } from "@angular/core";
import { ProductService } from "../services/products";

@Component({
  selector: "app-produtos",
  templateUrl: "./produtos.component.html",
  styleUrls: ["./produtos.component.scss"]
})
export class ProdutosComponent implements OnInit {
  products: any;
  quantidades: any;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.getProduct();
    this.getStorages();
  }

  getProduct() {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
      console.log("products", this.products);
    });
  }

  getStorages() {
    this.productService.getStorages().subscribe(quantidades => {
      this.quantidades = quantidades;
      console.log("quantidades", this.quantidades);
    });
  }
}
