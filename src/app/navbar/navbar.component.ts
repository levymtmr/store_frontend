import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterService } from '../services/router.service';
import {
  BsModalRef,
  BsModalService,
  ModalDirective
} from 'ngx-bootstrap/modal';
import { ModalLoginComponent } from '../modals/modal-login/modal-login.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public url = 'assets/images/petgula.png';
  router: Router;
  bsModalRef: BsModalRef;
  config = {
    animated: true,
    keyboard: false,
    backdrop: true,
    ignoreBackdropClick: true
  };

  constructor(
    private _routerService: RouterService,
    private _modalService: BsModalService
  ) {}

  ngOnInit() {}

  login() {
    this._modalService.show(ModalLoginComponent, this.config);
  }

  openNav() {
    document.getElementById('mySidenav').style.width = '250px';
    document.getElementById('main').style.marginLeft = '250px';
  }

  closeNav() {
    document.getElementById('mySidenav').style.width = '0';
    document.getElementById('main').style.marginLeft = '0';
  }
}
