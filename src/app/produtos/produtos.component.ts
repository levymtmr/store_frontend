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
  dados: any;
  nome:any;
  data:any;
  valor:any;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.getProduct();
    this.getStorages();
    this.createForm();
  }

  getProduct() {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
  }

  getStorages() {
    this.productService.getStorages().subscribe(storage => {
      this.storage = storage;
      console.log("pegando quatidades", this.storage)
    });
  }

  setAmountInProducts() {

  }

  createForm() {
    this.produtoForm = new FormGroup({
      nome: new FormControl("", Validators.required),
      data: new FormControl("", Validators.required),
      valor: new FormControl("", Validators.required),
      quantidade: new FormControl("", Validators.required)
    });
  }

  // getDados() {
  //   this.nome = this.produtoForm.get('nome').value
  //   this.data = this.produtoForm.get('data').value
  //   this.valor = this.produtoForm.get('valor').value
  //   console.log("chamando getdados() ", )
  // }

  adicionarProduto() {
    // this.getDados();
    this.dados = {
      'name':this.produtoForm.get('nome').value,
      'date':this.produtoForm.get('data').value,
      'price':this.produtoForm.get('valor').value,
      'amount': this.produtoForm.get('quantidade').value
    }
    console.log('dados', this.dados)
    this.productService.postProduct(this.dados).subscribe(res => {
      console.log("cadastrando produto", res)
    })
  }
}
