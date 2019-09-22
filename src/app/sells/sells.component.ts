import { Client } from './../models/client.models';
import { FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Product } from './../models/product.models';
import { Component, OnInit } from '@angular/core';
import { ApiServices } from '../services/api-services';
import { User } from '../models/user.models';
import { OrderDetail } from '../models/order-detail.models';
import * as _ from 'lodash';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ModalMakeSellsComponent } from '../modals/modal-make-sells/modal-make-sells.component';
import { ModalQuantityComponent } from '../modals/modal-quantity/modal-quantity.component';


@Component({
  selector: 'app-sells',
  templateUrl: './sells.component.html',
  styleUrls: ['./sells.component.scss']
})
export class SellsComponent implements OnInit {
  products: Product;
  users: User;
  sellForm: FormGroup;
  orderForm: FormGroup;
  ordeDetails: Array<OrderDetail> = [];
  tableProducts: Array<any> = [];
  paymentMethods: any;
  sellSuccess: boolean;
  errorMessages: any;
  // makeSellModal: BsModalRef;
  clients: Client;
  clientForm: FormGroup;
  selectedProduct: Product;
  clientItems: Array<OrderDetail> = [];

  constructor(private _apiServices: ApiServices, private _modalService: BsModalService) {}

  ngOnInit() {
    this.createForm();

    this.createClientForm();

    this.createOrderForm();

    this.setProductInSelectElement();

    this.setClients();

    this.setUsersInSelectElement();

    this.getPaymentMethods();
  }

  createForm() {
    this.sellForm = new FormGroup({
      users: new FormControl(null, Validators.required),
      product: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required),
      quantity: new FormControl(null, Validators.required),
      discount: new FormControl(
        { value: null, disabled: true },
        Validators.required
      )
    });
  }

  createClientForm() {
    this.clientForm = new FormGroup({
      clientCode: new FormControl(null, Validators.required)
    });
  }

  async setClients() {
    const clients = await this._apiServices.get('api/clients').toPromise();
    this.clients = clients;
  }

  createOrderForm() {
    this.orderForm = new FormGroup({
      payment: new FormControl(null, Validators.required),
      activate: new FormControl(null, Validators.required),
      user: new FormControl(null, Validators.required)
    });
  }

  async setProductInSelectElement() {
    const products = <Product>(
      await this._apiServices.get('api/products/').toPromise()
    );
    this.products = products;
  }

  async createOrdeDetail() {
    const data = {
      user: this.sellForm.get('users').value,
      products: this.sellForm.get('product').value,
      price: this.sellForm.get('price').value,
      quantity: this.sellForm.get('quantity').value,
      discount: this.sellForm.get('discount').value
    };
    try {
      const ordem_detail: OrderDetail = <OrderDetail>(
        await this._apiServices.post('api/order-details/', data).toPromise()
      );
      const dataForTable = {
        ordem: ordem_detail.id,
        name: await this.getProduct(ordem_detail.products)['name'],
        total: ordem_detail.total
      };
      this.ordeDetails.push(ordem_detail);
      this.tableProducts.push(dataForTable);
      this.clearFields(this.sellForm, [
        'product',
        'price',
        'quantity',
        'discount'
      ]);
    } catch (error) {
      this.errorMessages = error;
    }
  }

  async setUsersInSelectElement() {
    const users = <User>await this._apiServices.get('api/users/').toPromise();
    this.users = users;
  }

  async getProduct(id) {
    const product: Product = await this._apiServices
      .get(`api/products/${id}`)
      .toPromise();
    return product;
  }

  async setDataItemSelectedInForm() {
    const product = await this.getProduct(this.sellForm.get('product').value);
    this.selectedProduct = product;
    console.log("teste", this.selectedProduct);
  }

  async getPaymentMethods() {
    const paymentMethods = await this._apiServices
      .get('api/payment/')
      .toPromise();
    this.paymentMethods = paymentMethods;
  }

  async finishOrder() {
    const arrayOrder = [];
    const user = this.ordeDetails[0].user;
    this.ordeDetails.forEach(orderDetail => {
      arrayOrder.push(orderDetail.id);
    });
    const data = {
      payment: this.orderForm.get('payment').value,
      user: user,
      order_details: arrayOrder
    };
    try {
      const orderFinished = await this._apiServices
        .post('api/orders/', data)
        .toPromise();
      this.noticeForSuccessSell();
      this.clearFormsAndArrays();
    } catch (error) {
      this.errorMessages = error;
      console.log('Error', error);
    }
  }

  noticeForSuccessSell() {
    this.sellSuccess = true;
    setTimeout(function() {
      this.sellSuccess = false;
    }, 3000);
  }

  clearFields(form: FormGroup, fields: Array<string>) {
    fields.forEach(field => {
      form.get(field).reset();
    });
  }

  clearFormsAndArrays() {
    this.sellForm.reset();
    this.orderForm.reset();
    this.tableProducts.length = 0;
    this.ordeDetails.length = 0;
  }

  hasError(control: string) {
    if (_.has(this.errorMessages, control)) {
      return this.errorMessages[control];
    }
    return null;
  }

  // openModalQuantity() {
  //   const initialState = {
  //     item: this.sellForm.get('product').value,
  //     clientCode: this.clientForm.get('clientCode').value
  //   };

  //   this._modalService.show(ModalQuantityComponent, { initialState, class: 'gray modal-lg'} );
  // }

  // openModalMakeSell() {
  //     this._modalService.show(ModalMakeSellsComponent);
  // }

  async getDataProduct() {
    const data = {
      products: this.selectedProduct.id,
      quantity: this.selectedProduct.quantity,
      discount: 0,
      client: this.clientForm.get('clientCode').value,
      price: this.selectedProduct.price
    };
    try {
      const ordeDetail: OrderDetail =  await this._apiServices.post('api/order-details/', data).toPromise();
      this.clientItems.push(ordeDetail);
    } catch (error) {
      console.log(error);
    }
   

  }
}


