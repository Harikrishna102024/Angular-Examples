import { Component } from '@angular/core';
import { HttpService } from '../../Services/http.service';

@Component({
  selector: 'app-put',
  templateUrl: './put.component.html',
  styleUrl: './put.component.scss'
})
export class PutComponent {

  constructor(private service: HttpService){}

  userId: any;
  userName: any;
  email: any;
  password: any;


  put() {
    var user = {
      username: this.userName,
      email: this.email,
      password: this.password
    }
    this.service.putApi(this.userId, user).subscribe({
      next: (res) => {
        console.log('Success', res)
      },
      error: (err) => {
        console.log('Error', err)
      }
    })
  }

}
