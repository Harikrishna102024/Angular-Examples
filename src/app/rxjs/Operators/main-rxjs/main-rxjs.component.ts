import { Component } from '@angular/core';
import { OperatorsService } from '../../../Services/operators.service';
import { from, interval, of } from 'rxjs';

@Component({
  selector: 'app-main-rxjs',
  templateUrl: './main-rxjs.component.html',
  styleUrl: './main-rxjs.component.scss'
})
export class MainRxjsComponent {

  constructor(private service: OperatorsService) { }

  pipe: any[] = [];
  map: any[] = [];
  filter: any[] = [];
  catchStatus: any[] = [];
  of: any;
  from: any[] = [];
  interval: any;



  getPipeData() {
    this.service.getPipe().subscribe((data: any) => {
      this.pipe = data;
    })
  }

  getMapData() {
    this.service.getMap().subscribe((data: any) => {
      this.map = data;
    })
  }

  getFilterData() {
    this.service.getFilter().subscribe((data: any) => {
      this.filter = data;
    })
  }

  getCatchErroData() {
    this.service.getCatchError().subscribe((data: any) => {
      console.log(data)
      this.catchStatus = data
    })
  }

  ofOptr() {
    var data = [1,2,3,4,5,6]
      return of(data)
  }

  ofData() {
    this.ofOptr().subscribe((data: any) => {
      this.of = data
    })
  }

  formData() {
    var data = [1,2,3,4,5,6];
    return from(data)
  }

  getFrom() {
    this.formData().subscribe((data:any) => {
      this.from.push(data)
    })
  }

  intervalData() {
    var data = "hari"
    return data;
  }

  getInterval() {
    interval(2000).subscribe(() => {
      this.interval = this.intervalData();
    })
  }

  

}
