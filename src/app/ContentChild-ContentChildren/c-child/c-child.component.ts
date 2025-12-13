import { AfterContentInit, Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-c-child',
  templateUrl: './c-child.component.html',
  styleUrls: ['./c-child.component.scss'],
})
export class CChildComponent  {

  @ContentChild('myName') data!: ElementRef;

  parentData: any;

  ngAfterContentInit() {
    this.parentData = this.data.nativeElement.textContent
  }



}
