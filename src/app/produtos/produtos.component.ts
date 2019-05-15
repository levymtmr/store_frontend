import { Component, OnInit } from "@angular/core";
import { ProductService } from "../services/products";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-produtos",
  templateUrl: "./produtos.component.html",
  styleUrls: ["./produtos.component.scss"]
})
export class ProdutosComponent implements OnInit {
  products: any;
  storage: any;
  produtoForm: FormGroup;
  formAtualizarEstoque: FormGroup;
  dados: any;
  nome: any;
  data: any;
  valor: any;

  constructor(private productService: ProductService) {}

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
    this.productService.getStorages().subscribe(storage => {
      this.storage = storage;
      console.log("pegando quatidades", this.storage);
    });
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

  createFormAtualizarProduto() {
    this.formAtualizarEstoque = new FormGroup({
      atualizarNome: new FormControl("", Validators.required),
      atualizarData: new FormControl("", Validators.required),
      atualizarValor: new FormControl("", Validators.required),
      atualizarQuantidade: new FormControl("", Validators.required)
    });

    var dados = {
      nome: this.formAtualizarEstoque.get("atualizarNome").value,
      data: this.formAtualizarEstoque.get("atualizarData").value,
      valor: this.formAtualizarEstoque.get("atualizarValor").value,
      quantidade: this.formAtualizarEstoque.get("atualizarQuantidade").value
    };
    console.log("form atualizar dados", dados);
  }

  atualizarProduto(id) {
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
}
