import { StorageService } from "./../services/storage.service";
import { Component, OnInit, TemplateRef } from "@angular/core";
import { ProductService } from "../services/products.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { BsModalService, BsModalRef, ModalOptions } from "ngx-bootstrap/modal";

@Component({
  selector: "app-produtos",
  templateUrl: "./produtos.component.html",
  styleUrls: ["./produtos.component.scss"]
})
export class ProdutosComponent implements OnInit {
  products: any;
  storage: any;
  modalRef: BsModalRef;
  produtoForm: FormGroup;
  formAtualizarEstoque: FormGroup;
  dados: any;
  nome: any;
  data: any;
  valor: any;
  produtoSelecionado: number;
  formAdicionarProdutoDisplay: Boolean = false;
  contador: number = 0;

  constructor(
    private productService: ProductService,
    private storageService: StorageService,
    private modalService: BsModalService
  ) {}

  ngOnInit() {
    this.getProducts();
    this.getStorages();
    this.createForm();
    this.createFormAtualizarProduto();
  }

  getProducts() {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
  }

  getProduct(id) {
    return this.storage.filter(storageProduct => {
      return storageProduct.id == id;
    });
  }

  getStorages() {
    this.storageService.getStorages().subscribe(storage => {
      this.storage = storage;
      console.log("pegando quatidades", this.storage);
    });
  }

  abrirFormAdicionarProduto() {
    this.contador += 1;
    if (this.contador % 2 == 0) this.formAdicionarProdutoDisplay = true;
    else {
      this.formAdicionarProdutoDisplay = false;
    }
  }

  createForm() {
    this.produtoForm = new FormGroup({
      nome: new FormControl("", Validators.required),
      data: new FormControl("", Validators.required),
      valor: new FormControl("", Validators.required),
      quantidade: new FormControl("", Validators.required)
    });
  }

  adicionarProduto() {
    this.dados = {
      name: this.produtoForm.get("nome").value,
      date: this.produtoForm.get("data").value,
      price: this.produtoForm.get("valor").value,
      amount: this.produtoForm.get("quantidade").value
    };
    console.log("dados", this.dados);
    this.productService.postProduct(this.dados).subscribe(res => {
      console.log("cadastrando produto", res);
    });
  }

  pesquisaProdutos(word) {
    this.productService.searchProduct(word).subscribe(res => {
      console.log("resposta", res);
    });
  }

  atualizarFormProduto(id, template: TemplateRef<any>) {
    this.produtoSelecionado = id;
    this.modalRef = this.modalService.show(template, { class: "modal-lg" });
    console.log("chamando", this.getProduct(id));
    this.formAtualizarEstoque
      .get("atualizarNome")
      .setValue(this.getProduct(id)[0].product);
    this.formAtualizarEstoque
      .get("atualizarData")
      .setValue(this.getProduct(id)[0].date_storage);
    this.formAtualizarEstoque
      .get("atualizarValor")
      .setValue(this.getProduct(id)[0].price);
    this.formAtualizarEstoque
      .get("atualizarQuantidade")
      .setValue(this.getProduct(id)[0].amount);
  }

  createFormAtualizarProduto() {
    this.formAtualizarEstoque = new FormGroup({
      atualizarNome: new FormControl("", Validators.required),
      atualizarData: new FormControl("", Validators.required),
      atualizarValor: new FormControl("", Validators.required),
      atualizarQuantidade: new FormControl("", Validators.required)
    });
  }

  salvarNovosDados() {
    var dados = {
      product: this.formAtualizarEstoque.get("atualizarNome").value,
      date_storage: this.formAtualizarEstoque.get("atualizarData").value,
      price: this.formAtualizarEstoque.get("atualizarValor").value,
      amount: this.formAtualizarEstoque.get("atualizarQuantidade").value
    };
    console.log("form atualizar dados", dados);
    this.storageService.patchProduct(this.produtoSelecionado, dados).subscribe(
      res => {
        console.log("repostas", res);
      },
      error => {
        console.log("error", error);
      }
    );
  }
}
