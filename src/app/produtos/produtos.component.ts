import { Component, OnInit } from "@angular/core";
import { ProductService } from "../services/products";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-produtos",
  templateUrl: "./produtos.component.html",
  styleUrls: ["./produtos.component.scss"]
})
export class ProdutosComponent implements OnInit {
  products: any;
  quantidades: any;
  cadastrarProduto: FormGroup;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.getProduct();
    this.getStorages();
    this.createForm();
  }

  getProduct() {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
  }

  getStorages() {
    this.productService.getStorages().subscribe(quantidades => {
      this.quantidades = quantidades;
    });
  }

  createForm() {
    this.cadastrarProduto = new FormGroup({
      nome: new FormControl("", Validators.required)
      // dtNascimento: new FormControl("", Validators.required),
      // cpf: new FormControl("", Validators.required),
      // celular: new FormControl("", Validators.required),
      // email: new FormControl("", Validators.required)
    });
  }
}
