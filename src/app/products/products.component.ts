import { Component, OnInit } from "@angular/core";
import { Product } from "../models/product.models";
import { ProductService } from "../services/product.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ApiServices } from "../services/api-services";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"]
})
export class ProductsComponent implements OnInit {
  public productForm: FormGroup;

  constructor(
    private productsService: ProductService,
    private apiService: ApiServices
  ) {}

  ngOnInit() {
    this.getProducts();

    this.createForm();
  }

  createForm() {
    this.productForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required),
      date: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      quantity: new FormControl(null, Validators.required),
      category: new FormControl(null, Validators.required)
    });
  }

  async getProducts() {
    let products: Product;
    products = <Product>await this.apiService.get("api/products/").toPromise();
    console.log("produtos", products);
    console.log("tipo", typeof products);
  }

  getDataForm(): Product {
    return this.productForm.value as Product;
  }

  createProduct() {
    const data = this.getDataForm();
    this.productsService.postProduct(data).subscribe(res => {
      console.log("criando um produto", res);
    });
  }
}
