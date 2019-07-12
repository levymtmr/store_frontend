import { Validators } from "@angular/forms";
import { FormGroup, FormControl } from "@angular/forms";
import { ContaService } from "./../services/contas.service";
import { Component, OnInit } from "@angular/core";
import { Conta } from "../models/conta.model";

@Component({
  selector: "app-contas",
  templateUrl: "./contas.component.html",
  styleUrls: ["./contas.component.scss"]
})
export class ContasComponent implements OnInit {
  contas: any;
  contaForm: FormGroup;
  despesas: any;
  materiasPrimas: any;
  constructor(private contaService: ContaService) {}

  ngOnInit() {
    this.listContas();
    this.createForm();
    this.listDespesas();
    this.listMateriaPrima();
  }

  listContas() {
    this.contaService.getContas().subscribe(res => {
      this.contas = res;
    });
  }

  createForm() {
    this.contaForm = new FormGroup({
      description: new FormControl(null, Validators.required),
      payday: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required),
      category: new FormControl(null, Validators.required)
    });
  }

  listDespesas() {
    this.contaService.getContasCategory("despesas").subscribe(res => {
      this.despesas = res;
    });
  }

  listMateriaPrima() {
    this.contaService.getContasCategory("Materia").subscribe(res => {
      this.materiasPrimas = res;
    });
  }

  adicionarConta() {
    let data = {
      description: this.contaForm.get("description").value,
      payday: this.contaForm.get("payday").value,
      price: this.contaForm.get("price").value,
      category: this.contaForm.get("category").value
    };
    this.contaService.postConta(data).subscribe(
      res => {
        this.listContas();
      },
      error => {
        console.log("error", error);
      }
    );
  }
}
