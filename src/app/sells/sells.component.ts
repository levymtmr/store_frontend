import { Component, OnInit } from '@angular/core';
import { ApiServices } from '../services/api-services';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Product } from '../models/product.models';


@Component({
  selector: 'app-sells',
  templateUrl: './sells.component.html',
  styleUrls: ['./sells.component.scss']
})
export class SellsComponent implements OnInit {
  orderForm: FormGroup;
  ordemDetailForm: FormGroup;
  mostrarForm: Boolean = false;
  products: any;
  users: any;
  payments: any;

  constructor(private _apiServices: ApiServices ) { }

  ngOnInit() {
    this.createOrderForm();
    this.createOrdemDetailForm();
    this.getProducts();
    this.getUsers();
    this.getPaymentMethods();
  }

  createOrderForm() {
    this.orderForm = new FormGroup({
      order_date: new FormControl(null, Validators.required),
      ship_date: new FormControl(null, Validators.required),
      payment: new FormControl(null, Validators.required),
      user: new FormControl(null, Validators.required),
      order_details: new FormControl(null, Validators.required)
    });
  }

  createOrdemDetailForm() {
    this.ordemDetailForm = new FormGroup({
      products: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required),
      quantity: new FormControl(null, Validators.required),
      discount: new FormControl(null, Validators.required),
      user: new FormControl(null, Validators.required)
    });
  }

  async getProducts() {
    const products = await this._apiServices.get('api/products/').toPromise();
    this.products = products;
  }

  async getUsers() {
    const users = await this._apiServices.get('api/users/').toPromise();
    this.users = users;
  }

  async getPaymentMethods() {
    const payments = await this._apiServices.get('api/payment/').toPromise();
    this.payments = payments;
  }

  async getProductById(id: string) {
    const product = await this._apiServices.get('api/products/' + id).toPromise();
    console.log('produto', product);
  }

  getOrderDetailValues() {
    console.log('value do produto', this.ordemDetailForm.get('products').value);
  }

  createOrdeDetail() {
    this.mostrarForm = true;
  }

}
