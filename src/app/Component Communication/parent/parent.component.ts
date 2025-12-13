import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {

  parentData: string = "Works parent to child";

  childData: any;

  getChildData(event: any) {
    this.childData = event
  }

}
