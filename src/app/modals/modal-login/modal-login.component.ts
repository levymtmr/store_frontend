import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiServices } from 'src/app/services/api-services';
import { User } from 'src/app/models/user.models';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.scss']
})
export class ModalLoginComponent implements OnInit {
  private url = 'assets/images/petgula.png';
  loginForm: FormGroup;
  username: String;

  constructor(private apiServices: ApiServices) {}

  ngOnInit() {
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }

  getDataLoginForm() {
    return this.loginForm.value as User;
  }

  async login() {
    const userData = {
      username: this.loginForm.get('username').value,
      password: this.loginForm.get('password').value
    };
    try {
      const response = await this.apiServices.post('api/token/', userData).toPromise();
      this.username = this.username;
    } catch (error) {
      console.log('error', error);
      }
    }

}
