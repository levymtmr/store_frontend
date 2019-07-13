import { ClientService } from "./../services/client.service";
import { Cliente } from "./../models/cliente.model";
import { SellService } from "./../services/sell.service";
import { Component, OnInit, TemplateRef } from "@angular/core";
import { ProductService } from "../services/products.service";
import { BsModalService, BsModalRef, ModalOptions } from "ngx-bootstrap/modal";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Produto } from "../models/produto.model";
import { FormVendasModalComponent } from "../modals/form-vendas-modal/form-vendas-modal.component";
import { element } from "@angular/core/src/render3";

@Component({
  selector: "app-form-vendas",
  templateUrl: "./form-vendas.component.html",
  styleUrls: ["./form-vendas.component.scss"]
})
export class FormVendasComponent implements OnInit {
  products: Array<Produto>;
  sellProducts: any;
  clients: Array<Cliente>;
  modalRef: BsModalRef;
  dados: any;
  itemsCarrinho: Array<any> = [];
  nameCLiente: String;
  searchForm: FormGroup;

  constructor(
    private productService: ProductService,
    private sellProductService: SellService,
    private modalService: BsModalService,
    private clienteService: ClientService
  ) {}

  ngOnInit() {
    this.get_name_products();
    this.getProdutosVendidos();
    this.getClientesForSell();
  }

  get_name_products() {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
  }

  getProdutosVendidos() {
    const productSubscrib = this.sellProductService.getProductSells().subscribe(sellProducts => {
      this.sellProducts = sellProducts;
    });
    // productSubscrib.unsubscribe();
  }

  getClientesForSell() {
    this.clienteService.getClients().subscribe(clients => {
      this.clients = clients;
    });
  }

  openModal() {
    this.modalRef = this.modalService.show(FormVendasModalComponent, {
      class: "modal-lg"
    });
  }

  searchProduct(search) {
    this.sellProductService.searchProducts(search).subscribe(res => {
      this.sellProducts = res;
      console.log("res", res);
    });
  }

 

  getCliente(id) {
    return this.clients.filter(cliente => {
      return cliente.id === id;
    });
  }

  getProduct(id) {
    return this.products.filter(product => {
      return product.id === id;
    });
  }
}
