import { Component } from '@angular/core';
import { HttpService } from '../../Services/http.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {

  constructor(private servise: HttpService) { }

  userName: any;
  email: any;
  password: any;



  post() {
    var user = {
      username: this.userName,
      email: this.email,
      password: this.password
    }
    this.servise.postApi(user).subscribe({
      next: (res) => {
        console.log('Success', res);
      },
      error: (err) => {
        console.error('Error', err);
      }
    })
  }
}
