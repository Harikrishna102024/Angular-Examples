import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-on-distroy',
  templateUrl: './ng-on-distroy.component.html',
  styleUrl: './ng-on-distroy.component.scss'
})
export class NgOnDistroyComponent {

  ngOnDestroy() {
    console.log("Interval cleared, component destroyed");
  }

}
