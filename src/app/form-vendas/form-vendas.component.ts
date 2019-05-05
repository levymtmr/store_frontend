import { Component, OnInit, TemplateRef } from "@angular/core";
import { ProductService } from "../services/products";
import { SellService } from "../services/sell.service";
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
      nome_cliente: new FormControl(null, Validators.required),
      nome_produto: new FormControl(null, Validators.required),
      unidade: new FormControl(null, Validators.required),
      quantidade: new FormControl(null, Validators.required),
      valor: new FormControl(null, Validators.required)
    });
  }

  adicionarProdutoCarrinho() {
    this.dados = {
      nome_cliente: this.carrinhoForm.get("nome_cliente").value,
      nome_produto: this.carrinhoForm.get("nome_produto").value,
      unidade: this.carrinhoForm.get("unidade").value,
      quantidade: this.carrinhoForm.get("quantidade").value,
      valor: this.carrinhoForm.get("valor").value
    };
    this.itemsCarrinho.push(this.dados);
    console.log("dados", this.dados);
  }
}
