import { Component } from '@angular/core';
import { DemoService } from '../../Services/demo.service';

@Component({
  selector: 'app-demo-service',
  templateUrl: './demo-service.component.html',
  styleUrl: './demo-service.component.scss'
})
export class DemoServiceComponent {

  constructor(private service: DemoService){}

  data: any;

  getUserData() {
    this.data = this.service.userInfo();
  }

}
