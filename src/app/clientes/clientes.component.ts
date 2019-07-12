import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';
import { Cliente } from '../models/cliente.model';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {
  clientes: Array<Cliente> = [];
  cliente: any;
  clienteForm: FormGroup;
  constructor(private clientService: ClientService) {}

  ngOnInit() {
    this.listClientes();
    this.createForm();
  }

  listClienteById() {}

  listClientes() {
    this.clientService.getClients().subscribe(res => {
      this.clientes = res;
    });
  }

  createForm() {
    this.clienteForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      phone: new FormControl(null, Validators.required),
      addres: new FormControl(null, Validators.required)
    });
  }

  adicionarCliente() {
    this.cliente = {
      name: this.clienteForm.get('name').value,
      phone: this.clienteForm.get('phone').value,
      addres: this.clienteForm.get('addres').value
    };
    this.clientService.postCliente(this.cliente).subscribe(
      res => {
        this.listClientes();
      },
      error => {
        console.log('error', error);
      }
    );
  }
}
