import { User } from "./../models/user.models";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { ApiServices } from "../services/api-services";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  private url = 'assets/images/petgula.png';
  loginForm: FormGroup;

  constructor(private apiServices: ApiServices) {}

  ngOnInit() {
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = new FormGroup({
      login: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }

  getDataLoginForm() {
    return this.loginForm.value as User;
  }

  login() {
    const userData = this.getDataLoginForm();
    // const userData = {
    //   login: this.loginForm.get("login").value,
    //   email: this.loginForm.get("email").value,
    //   password: this.loginForm.get("password")
    // };
    this.apiServices.post('login/', userData).subscribe(res => {
      console.log("res", res);
    });
  }
}
