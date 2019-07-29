import { Component, OnInit } from '@angular/core';
import {Product} from '../models/product.models';
import {ProductService} from '../services/product.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public productForm: FormGroup;


  constructor(private productsService: ProductService) { }


  ngOnInit() {
    this.getProducts();

    this.createForm();
  }

  createForm() {
    this.productForm = new FormGroup({
      name: new FormControl(),
      price: new FormControl(),
      date: new FormControl(),
      description: new FormControl(),
      quantity: new FormControl(),
      category: new FormControl()
    });
  }

  async getProducts() {
    const products = <Product> await this.productsService.getProducts().toPromise();
    console.log('produtos', products);
  }

  getDataForm(): Product {
    const data = new Product(this.productForm.get('name').value,
        this.productForm.get('price').value,
        this.productForm.get('date').value,
        this.productForm.get('description').value,
        this.productForm.get('quantity').value,
        this.productForm.get('category').value);
    return data;
  }

  createProduct() {
    const data = this.getDataForm();
    this.productsService.postProduct(data).subscribe(res => {
      console.log('criando um produto', res);
    });
  }


}
