import { Component, OnInit } from '@angular/core';
import { ApiServices } from '../../services/api-services';
import { Product } from '../../models/product.models';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { OrderDetail } from 'src/app/models/order-detail.models';
import { stringify } from '@angular/core/src/util';

@Component({
  selector: 'app-modal-quantity',
  templateUrl: './modal-quantity.component.html',
  styleUrls: ['./modal-quantity.component.scss']
})
export class ModalQuantityComponent implements OnInit {
  item;
  clientCode;
  productId: number;
  productName: string;
  productPrice: number;
  productQuantity = 1;
  productDisplayPrice: number;
  productUnity: string;

  constructor(
    private _apiServices: ApiServices,
    private _bsModalRef: BsModalRef
  ) {}

  ngOnInit() {
    this.productSelected();
  }

  async productSelected() {
    const idProduct = this.item;
    const products = <Product>(
      await this._apiServices.get('api/products/' + idProduct).toPromise()
    );
    this.productId = products.id;
    this.productName = products.name;
    this.productQuantity = products.quantity;
    this.productPrice = products.price;
    this.productDisplayPrice = products.price;
    this.productUnity = products.unity;
    console.log('id do item', products);
  }

  valueChangeQuantity(value: number) {
    const total = this.productPrice * value;
    this.productDisplayPrice = total;
  }

  valueChangePrice(value: number) {
    if (this.productUnity === 'KG') {
      const total = (value * 1000) / this.productPrice;
      this.productQuantity = total;
    }
  }

  async createOrderDetail() {
    const data = {
      price: this.productDisplayPrice,
      quantity: this.productQuantity,
      products: this.productId,
      client: this.clientCode,
      discount: 0
    };
    try {
      const orderDetail = <OrderDetail> await this._apiServices.post('api/order-details/', data).toPromise();
      this.modalClose();
      // localStorage.setItem('list_ordems', stringify(orderDetail.id));
    } catch (error) {
      console.log("eeaesadasd", error);
    }
  }

  modalClose() {
    this._bsModalRef.hide();
  }
}
