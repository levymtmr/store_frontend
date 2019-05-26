import { Produto } from './../models/produto.model';
import { StorageService } from './../services/storage.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from '@angular/forms';
import { ProductService } from '../services/products.service';

@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.scss']
})
export class EstoqueComponent implements OnInit {
  estoqueProdutos: any;
  produtosCadastrados: Array<Produto>;
  modalRef: BsModalRef;
  formAdicionarProdutoDisplay: Boolean = false;
  contador: number = 0;
  produtoEstoqueForm: FormGroup;
  formAtualizarEstoque: FormGroup;
  produtoSelecionado: number;
  dados: any;

  constructor(
    private storageService: StorageService,
    private produtoService: ProductService,
    private formBuilder: FormBuilder,
    private modalService: BsModalService
  ) {}

  ngOnInit() {
    this.getProdutosEstoque();
    this.createForm();
    this.getProdutosCadastrados();
    this.createFormAtualizarProduto();
  }

  createForm() {
    this.produtoEstoqueForm = this.formBuilder.group({
      nome: [null],
      data: [null],
      valor: [null],
      quantidade: [null],
      unidade: [null]
    });
  }

  getProdutosEstoque() {
    this.storageService.getStorages().subscribe(
      res => {
        console.log('res', res);
        this.estoqueProdutos = res;
      },
      error => {
        console.log('error', error);
      }
    );
  }

  getProdutosCadastrados() {
    this.produtoService.getProducts().subscribe(
      res => {
        console.log('res', res);
        this.produtosCadastrados = res;
      },
      error => {
        console.log('erros', error);
      }
    );
  }

  createFormAtualizarProduto() {
    this.formAtualizarEstoque = new FormGroup({
      atualizarNome: new FormControl('', Validators.required),
      atualizarQuantidade: new FormControl('', Validators.required)
    });
  }

  returnProdutoPorId(id) {
    return this.estoqueProdutos.filter(produtoEstoque => {
      return produtoEstoque.id === id;
    });
  }

  atualizarProdutoNoEstoque(id, template: TemplateRef<any>) {
    this.produtoSelecionado = id;
    this.modalRef = this.modalService.show(template, { class: 'modal-lg' });
    this.formAtualizarEstoque
      .get('atualizarNome')
      .setValue(this.returnProdutoPorId(id)[0].product);
    this.formAtualizarEstoque
      .get('atualizarQuantidade')
      .setValue(this.returnProdutoPorId(id)[0].amount);
  }

  abrirFormAdicionarProduto() {
    this.contador += 1;
    if (this.contador % 2 !== 0) {
      this.formAdicionarProdutoDisplay = true;
    } else {
      this.formAdicionarProdutoDisplay = false;
    }
  }

  adicionarProduto() {
    this.dados = {
      product: this.produtoEstoqueForm.get('nome').value,
      date_storage: this.produtoEstoqueForm.get('data').value,
      amount: this.produtoEstoqueForm.get('quantidade').value,
      unit: this.produtoEstoqueForm.get('unidade').value
    };
    console.log('dados', this.dados);
    this.storageService.postStorage(this.dados).subscribe(res => {
      console.log('cadastrando produto', res);
      this.formAdicionarProdutoDisplay = false;
      this.getProdutosEstoque();
    });
  }

  salvarNovosDados() {
    const dados = {
      name: this.formAtualizarEstoque.get('atualizarNome').value,
      amount: this.formAtualizarEstoque.get('atualizarQuantidade').value
    };
    console.log('form atualizar dados', dados);
    this.storageService
      .patchProductInStorage(this.produtoSelecionado, dados)
      .subscribe(
        res => {
          console.log('repostas', res);
          this.modalRef.hide();
          this.getProdutosEstoque();
        },
        error => {
          console.log('error', error);
        }
      );
  }
}
