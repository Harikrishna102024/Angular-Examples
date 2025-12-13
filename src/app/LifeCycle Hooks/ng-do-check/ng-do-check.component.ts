import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-do-check',
  templateUrl: './ng-do-check.component.html',
  styleUrl: './ng-do-check.component.scss'
})
export class NgDoCheckComponent {

  data: string[] = ["hari", "krishna"];
  newItem = "";

  ngDoCheck() {
    console.log("DO CALLED")
  }

  addItem() {
    this.data.push(this.newItem);
  }

}
