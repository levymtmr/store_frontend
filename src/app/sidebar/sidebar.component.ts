import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent implements OnInit {
  private logo = "./petgula.png";
  private _opened: boolean = false;
  private _modeNum: number = 0;
  private _MODES: Array<string> = ["push"];
  private url = "assets/images/petgula.png";

  private _toggleSidebar() {
    this._opened = !this._opened;
  }

  constructor() {}

  ngOnInit() {}
}
