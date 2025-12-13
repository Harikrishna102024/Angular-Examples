import { Component, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

    name: any = "Krishna"

    data: any = "Angular"

    value: any;

    change() {
      this.value = "HARIKRISHNA"
    }


  // constructor() {
  //   console.log("constructor");
  // }

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log("ngOnChanges");
  // }

  // ngOnInit() {
  //   console.log("ngOnInit");
  // }
  // ngAfterViewInit() {
  //   console.log("ngAfterViewInit");
  // }

  // ngAfterViewChecked() {
  //   console.log("ngAfterViewChecked");
  // }


  // ngDoCheck() {
  //   console.log("ngDoCheck");
  // }

  // ngAfterContentInit() {
  //   console.log("ngAfterContentInit");
  // }

  // ngAfterContentChecked() {
  //   console.log("ngAfterContentChecked");
  // }

  
  // ngOnDestroy() {
  //   console.log("ngOnDestroy");
  // }
}
