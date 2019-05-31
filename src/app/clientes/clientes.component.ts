import { Component, OnInit } from "@angular/core";
import { ClientService } from "../services/client.service";
import { Cliente } from "../models/cliente.model";

@Component({
  selector: "app-clientes",
  templateUrl: "./clientes.component.html",
  styleUrls: ["./clientes.component.scss"]
})
export class ClientesComponent implements OnInit {
  clientes: Array<Cliente> = [];
  constructor(private clientService: ClientService) {}

  ngOnInit() {
    this.listClientes();
  }

  listClienteById() {}

  listClientes() {
    this.clientService.getClients().subscribe(res => {
      console.log("chamando clientes", res);
      this.clientes = res;
    });
  }

  adicionarCliente(cliente) {
    this.clientService.postCliente(cliente).subscribe(
      res => {
        console.log("res", res);
      },
      error => {
        console.log("error", error);
      }
    );
  }
}
