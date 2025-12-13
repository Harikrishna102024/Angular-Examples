import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-ngafterview-init-checked',
  templateUrl: './ngafterview-init-checked.component.html',
  styleUrl: './ngafterview-init-checked.component.scss'
})
export class NgafterviewInitCheckedComponent {

  @ViewChild('info') data!: ElementRef;

  int = 0

  show() {
    this.int++
  }

  ngAfterViewInit() {
    console.log("View Initialized")
    console.log(this.data.nativeElement.innerText)
  }

  ngAfterViewChecked() {
    console.log("View is changed")
  }

}
