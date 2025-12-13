import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent implements OnInit {

  @Input() data: any;


  childData: string = "Works child to parent"

  @Output() childEvent = new EventEmitter<any>();

  ngOnInit() {
    this.snedDataToParent();
  }

  snedDataToParent() {
    this.childEvent.emit(this.childData)
  }


}
