import { ClientService } from "./../services/client.service";
import { Cliente } from "./../models/cliente.model";
import { SellService } from "./../services/sell.service";
import { Component, OnInit, TemplateRef } from "@angular/core";
import { ProductService } from "../services/products";
import { BsModalService, BsModalRef, ModalOptions } from "ngx-bootstrap/modal";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Produto } from "../models/produto.model";

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
  carrinhoForm: FormGroup;
  dados: any;
  itemsCarrinho: Array<any> = [];
  nameCLiente: String;

  constructor(
    private product: ProductService,
    private sellProduct: SellService,
    private modalService: BsModalService,
    private clienteService: ClientService
  ) {}

  ngOnInit() {
    this.get_name_products();
    this.getProdutosVendidos();
    // this.getClientesForSell();
  }

  get_name_products() {
    this.product.getProducts().subscribe(products => {
      this.products = products;
    });
  }

  getProdutosVendidos() {
    this.sellProduct.getProductSells().subscribe(sellProducts => {
      this.sellProducts = sellProducts;
    });
  }

  getClientesForSell() {
    this.clienteService.getClients().subscribe(clients => {
      this.clients = clients;
    });
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: "modal-lg" });
    this.createFormCarrinho();
  }

  createFormCarrinho() {
    this.carrinhoForm = new FormGroup({
      client: new FormControl(null, Validators.required),
      products_storage: new FormControl(null, Validators.required),
      unit: new FormControl(null, Validators.required),
      amount: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required)
    });
  }

  getCliente(id) {
    return this.clients.filter(cliente => {
      return cliente.id == id;
    });
  }

  getProduct(id) {
    return this.products.filter(product => {
      return product.id == id;
    });
  }

  adicionarProdutoCarrinho() {
    const clienteId = this.carrinhoForm.get("client").value;
    const productId = this.carrinhoForm.get("products_storage").value;
    this.dados = {
      client_display: this.getCliente(clienteId)[0].name,
      product_display: this.getProduct(productId)[0].name,
      client: clienteId,
      products_storage: this.carrinhoForm.get("products_storage").value,
      unit: this.carrinhoForm.get("unit").value,
      amount: this.carrinhoForm.get("amount").value,
      price: this.carrinhoForm.get("price").value
    };
    this.itemsCarrinho.push(this.dados);
  }

  dadosIsEmpty() {
    if (this.dados != null) {
      return false;
    } else {
      return true;
    }
  }

  fecharPedido() {
    this.itemsCarrinho.forEach(element => {
      this.sellProduct.postProductSells(element).subscribe(
        res => {
          console.log("response", res);
          this.itemsCarrinho.forEach(element => {
            this.itemsCarrinho.pop();
          });
        },
        error => {
          console.log("objetos ", error);
        }
      );
    });
    this.modalRef.hide();
  }
}
