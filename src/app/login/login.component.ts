import { User } from './../models/user.models';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ApiServices } from '../services/api-services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
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
