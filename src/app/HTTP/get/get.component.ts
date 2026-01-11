import { Component } from '@angular/core';
import { HttpService } from '../../Services/http.service';
import { environments } from '../../../environments/environment';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrl: './get.component.scss'
})
export class GetComponent {
  constructor(private service: HttpService){}
  baseApi = environments.aiiUrl
  userdata: any[] = [];

  get() {
    this.service.getApiData().subscribe((data: any) => {
      this.userdata = data;
    })
  }
}
