import { Component } from '@angular/core';
import { ProductService } from './services/products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'store';
  products: any;
  
  constructor(productService: ProductService){
    productService.getProducts().subscribe(products => this.products = products);
    console.log("sdasdas",this.products);
  }

}
