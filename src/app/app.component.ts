import { Component } from "@angular/core";
import { ProductService } from "./services/products.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "store";
}
