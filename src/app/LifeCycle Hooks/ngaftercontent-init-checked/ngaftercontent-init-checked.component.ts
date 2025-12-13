import { Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-ngaftercontent-init-checked',
  templateUrl: './ngaftercontent-init-checked.component.html',
  styleUrl: './ngaftercontent-init-checked.component.scss'
})
export class NgaftercontentInitCheckedComponent {

  @ContentChild('') data! : ElementRef;

  ngAfterContentInit() {
    console.log("INIT")
  }

  ngAfterContentChecked() {
    console.log("CHECKED")
  }
}
