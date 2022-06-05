import { Component, OnInit } from "@angular/core";
import { customizationConfig } from "../../project.model";

@Component({
  selector: "app-project-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class ProjectListComponent implements OnInit {
  customizationConfig = customizationConfig;

  constructor() {}

  ngOnInit(): void {}
}
