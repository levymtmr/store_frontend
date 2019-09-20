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
  modalRef: BsModalRef;

  constructor(
    private _apiServices: ApiServices,
    private _modalService: BsModalService
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
    this.productPrice = products.price;
    console.log('id do item', products);
  }

  modalClose() {
    this.modalRef.hide();
  }
}
