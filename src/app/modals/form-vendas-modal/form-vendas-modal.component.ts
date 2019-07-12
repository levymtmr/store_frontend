import { Component, OnInit } from '@angular/core';
import {ModalModule, BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form-vendas-modal',
  templateUrl: './form-vendas-modal.component.html',
  styleUrls: ['./form-vendas-modal.component.scss']
})
export class FormVendasModalComponent implements OnInit {
  modalRef: BsModalRef;
  dados: any;
  carrinhoForm: FormGroup;

  constructor(private modalService: BsModalService) {}

  ngOnInit() {}

  AddItem() {

  }

  closeModal() {
    this.modalRef.hide();
  }
}
