import { Component, OnInit } from '@angular/core';
import { ApiServices } from '../services/api-services';

@Component({
  selector: 'app-sells',
  templateUrl: './sells.component.html',
  styleUrls: ['./sells.component.scss']
})
export class SellsComponent implements OnInit {

  constructor(private _apiServices: ApiServices ) { }

  ngOnInit() {
    this.getProducts();
  }

  async getProducts() {
    const products = await this._apiServices.get('api/products/').toPromise();
    console.log("produtos", products);
  }

}
