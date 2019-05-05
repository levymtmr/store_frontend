import { Component, OnInit } from "@angular/core";
import { ModalModule, BsModalRef } from "ngx-bootstrap/modal";

@Component({
  selector: "app-form-vendas-modal",
  templateUrl: "./form-vendas-modal.component.html",
  styleUrls: ["./form-vendas-modal.component.scss"]
})
export class FormVendasModalComponent implements OnInit {
  modalRef: BsModalRef;

  constructor() {}

  ngOnInit() {}
}
