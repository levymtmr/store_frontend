import { SellService } from "./../services/sell.service";
import { Component, OnInit, TemplateRef } from "@angular/core";
import { ProductService } from "../services/products";
import { BsModalService, BsModalRef, ModalOptions } from "ngx-bootstrap/modal";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-form-vendas",
  templateUrl: "./form-vendas.component.html",
  styleUrls: ["./form-vendas.component.scss"]
})
export class FormVendasComponent implements OnInit {
  products: any;
  sellProducts: any;
  clients: any;
  modalRef: BsModalRef;
  carrinhoForm: FormGroup;
  dados: any;
  itemsCarrinho: Array<any> = [];

  constructor(
    private product: ProductService,
    private sellProduct: SellService,
    private modalService: BsModalService
  ) {}

  ngOnInit() {
    this.get_name_products();
    this.getProdutosVendidos();
    this.getClientesForSell();
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
    this.sellProduct.getClients().subscribe(clients => {
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

  adicionarProdutoCarrinho() {
    this.dados = {
      client: this.carrinhoForm.get("client").value,
      products_storage: this.carrinhoForm.get("products_storage").value,
      unit: this.carrinhoForm.get("unit").value,
      amount: this.carrinhoForm.get("amount").value,
      price: this.carrinhoForm.get("price").value
    };
    this.itemsCarrinho.push(this.dados);
    console.log("dados", this.dados);
  }

  salvarVendas(elemento) {}

  fecharPedido() {
    this.itemsCarrinho.forEach(element => {
      this.sellProduct.postProductSells(element).subscribe(res => {
        console.log("respose", res);
      });
      console.log("objetos ", element);
    });
  }
}
