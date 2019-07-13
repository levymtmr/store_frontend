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
  carrinhoForm: FormGroup;
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
    this.sellProductService.getProductSells().subscribe(sellProducts => {
      this.sellProducts = sellProducts;
    });
  }

  getClientesForSell() {
    this.clienteService.getClients().subscribe(clients => {
      this.clients = clients;
    });
  }

  openModal(template) {
    this.modalRef = this.modalService.show(template, {
      class: "modal-lg"
    });
    this.createFormCarrinho();
  }

  searchProduct(search) {
    this.sellProductService.searchProducts(search).subscribe(res => {
      this.sellProducts = res;
      console.log("res", res);
    });
  }

  createFormCarrinho() {
    this.carrinhoForm = new FormGroup({
      client: new FormControl(null, Validators.required),
      products: new FormControl(null, Validators.required),
      unit: new FormControl(null, Validators.required),
      amount: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required)
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

  verificarExistente(dados) {
    console.log("verificar dados", dados);
  }

  async adicionarProdutoCarrinho() {
    const clienteId = this.carrinhoForm.get("client").value;
    const productId = this.carrinhoForm.get("products").value;

    const client = await (<any>(
      this.clienteService.getCliente(clienteId).toPromise()
    ));

    const product = await (<any>(
      this.productService.getProduct(productId).toPromise()
    ));

    this.dados = {
      client_display: client.name,
      product_display: product.name,
      client: clienteId,
      products_storage: this.carrinhoForm.get("products").value,
      unit: this.carrinhoForm.get("unit").value,
      amount: this.carrinhoForm.get("amount").value,
      price: this.carrinhoForm.get("price").value
    };
    this.itemsCarrinho.push(this.dados);
    this.carrinhoForm.get("products").reset();
    this.carrinhoForm.get("unit").reset();
    this.carrinhoForm.get("amount").reset();
    this.carrinhoForm.get("price").reset();
  }

  // fecharPedido() {
  //   this.itemsCarrinho.forEach(element => {
  //     console.log('chamando', element);
  //     this.sellProductService.postProductSells(element).subscribe(
  //       res => {
  //         console.log('response', res);
  //         this.carrinhoForm.reset();

  //         this.getProdutosVendidos();
  //       },
  //       error => {
  //         console.log('objetos ', error);
  //       }
  //     );
  //   });
  //   this.modalRef.hide();
  // }

  fecharPedido() {
    this.itemsCarrinho.forEach(element => {
      this.sellProductService.postProductSells(element).toPromise();
    });
    this.modalRef.hide();
    this.getProdutosVendidos();
    this.carrinhoForm.reset();
  }
}
