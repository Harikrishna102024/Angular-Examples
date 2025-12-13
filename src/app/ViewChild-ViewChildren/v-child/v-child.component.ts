import { Component } from '@angular/core';

@Component({
  selector: 'app-v-child',
  templateUrl: './v-child.component.html',
  styleUrl: './v-child.component.scss'
})
export class VChildComponent {

  message: any = "hello angular";

  array: any =[1,2,3,4,5,6,7,8,9,10]

  display() {
    return this.array;
  }

}
