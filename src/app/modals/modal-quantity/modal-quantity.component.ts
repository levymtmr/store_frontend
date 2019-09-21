import { Component, OnInit } from '@angular/core';
import { ApiServices } from '../../services/api-services';
import { Product } from '../../models/product.models';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal-quantity',
  templateUrl: './modal-quantity.component.html',
  styleUrls: ['./modal-quantity.component.scss']
})
export class ModalQuantityComponent implements OnInit {
  item;
  productId: number;
  productName: string;
  productPrice: number;
  productQuantity: number = 1;
  productDisplayPrice: number;
  productUnity: string;

  constructor(
    private _apiServices: ApiServices,
    private _modalService: BsModalService,
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

  valueChangeQuantity(value) {
    const total = this.productPrice * value;
    this.productDisplayPrice = total;
  }

  valueChangePrice(value) {
    if (this.productUnity == "KG") {
      const total = (value * 1000) / this.productPrice;
      this.productQuantity = total;
    };
    
  }

  modalClose() {
    this._bsModalRef.hide();
  }
}
