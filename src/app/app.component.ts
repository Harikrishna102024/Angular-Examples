import { Component, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor(private router: Router){}

  name: any = "Krishna"

  data: any = "Angular"

  value: any;

  ngOnInit() {
    this.router.navigate(['/demo']);
  }

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
