import { Component } from '@angular/core';
import { HttpService } from '../../Services/http.service';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrl: './get.component.scss'
})
export class GetComponent {
  constructor(private service: HttpService){}

  userdata: any[] = [];

  get() {
    this.service.getApiData().subscribe((data: any) => {
      this.userdata = data;
    })
  }
}
