import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { VChildComponent } from '../v-child/v-child.component';

@Component({
  selector: 'app-v-parent',
  templateUrl: './v-parent.component.html',
  styleUrl: './v-parent.component.scss'
})
export class VParentComponent {

  @ViewChild(VChildComponent) child!: VChildComponent;
  @ViewChild('myHeading', { static: false }) heading!: ElementRef;



  msg: any;
  idAccess: any;

  displayMsg() {
    this.msg = this.child.display()
    // this.idAccess = this.heading.nativeElement.innerText
  }


  @ViewChildren('para') paragraphs!: QueryList<ElementRef>;

  highlight() {
    this.paragraphs.forEach(p => {
      p.nativeElement.style.color = 'red';
    });
  }

}
