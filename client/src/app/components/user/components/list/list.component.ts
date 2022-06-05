import { Component, OnInit } from "@angular/core";
import { customizationConfig } from "../../user.model";

@Component({
  selector: "app-user-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class UserListComponent implements OnInit {
  customizationConfig = customizationConfig;

  constructor() {}

  ngOnInit(): void {}
}
