import { Component } from '@angular/core';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrl: './testing.component.scss'
})
export class TestingComponent {

  result: any;
  num1: any;
  num2: any;

  displayResult() {
    var v1 = Number(this.num1);
    var v2 = Number(this.num2);

    this.result = v1 + v2;
  }

  remove() {
    this.result = "";
    this.num1 = "";
    this.num2 = "";
  }
}
