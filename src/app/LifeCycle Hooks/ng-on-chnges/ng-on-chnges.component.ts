import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ng-on-chnges',
  templateUrl: './ng-on-chnges.component.html',
  styleUrl: './ng-on-chnges.component.scss'
})
export class NgOnChngesComponent implements OnChanges {

  @Input() data: any;

  value: any = "Angular"

  ngOnChanges() {
     setTimeout(() => {
        this.value = this.data
      }, 2000)
  }

}
