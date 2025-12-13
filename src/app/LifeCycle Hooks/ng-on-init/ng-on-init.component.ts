import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-on-init',
  templateUrl: './ng-on-init.component.html',
  styleUrl: './ng-on-init.component.scss'
})
export class NgOnInitComponent {

  value: any;

  ngOnInit() {
    this.value = "OnInit called"
  }

}
