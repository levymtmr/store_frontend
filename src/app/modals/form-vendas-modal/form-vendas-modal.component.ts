import { ProductService } from "./../../services/products.service";
import { ClientService } from "./../../services/client.service";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { ModalModule, BsModalRef, BsModalService } from "ngx-bootstrap/modal";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { SellService } from 'src/app/services/sell.service';

@Component({
  selector: "app-form-vendas-modal",
  templateUrl: "./form-vendas-modal.component.html",
  styleUrls: ["./form-vendas-modal.component.scss"]
})
export class FormVendasModalComponent implements OnInit, OnDestroy {
  item: any;
  itemForm: FormGroup;
  clients: any;
  products: any;
  itemsInCart: Array<any> = [];

  constructor(
    private modalService: BsModalService,
    private modalRef: BsModalRef,
    private clientService: ClientService,
    private productService: ProductService,
    private sellProductService: SellService 
  ) {}

  ngOnInit() {
    this.createForm();
    this.setClients();
    this.setProducts();
  }

  async setClients() {
    const clientes = <any>await this.clientService.getClients().toPromise();
    this.clients = clientes;
  }

  async setProducts() {
    const products = <any>await this.productService.getProducts().toPromise();
    this.products = products;
  }


  createForm() {
    this.itemForm = new FormGroup({
      client: new FormControl(null, Validators.required),
      products: new FormControl(null, Validators.required),
      unit: new FormControl(null, Validators.required),
      amount: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required)
    });
  }

  async addItemInCart() {
    const client = <any> await this.clientService.getCliente(this.itemForm.get('client').value).toPromise();
    const product = <any> await this.productService.getProduct(this.itemForm.get('products').value).toPromise();
    const item = {
      client_display: client.name,
      product_display: product.name,
      client: client.id,
      products_storage: product.id,
      unit: this.itemForm.get('unit').value,
      amount: this.itemForm.get('amount').value,
      price: this.itemForm.get('price').value
    };
   this.itemsInCart.push(item);
  }

  async effectAllItemsInCart() {
    this.itemsInCart.forEach(element => {
      this.sellProductService.postProductSells(element).toPromise();
    });
    await this.sellProductService.getProductSells().toPromise();
    this.modalRef.hide();
    this.itemForm.reset();
  }

  closeModal() {
    this.modalRef.hide();
  }

  ngOnDestroy() {}
}
