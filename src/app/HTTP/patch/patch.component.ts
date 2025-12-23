import { Component } from '@angular/core';
import { HttpService } from '../../Services/http.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-patch',
  templateUrl: './patch.component.html',
  styleUrl: './patch.component.scss'
})
export class PatchComponent {

  constructor(private service: HttpService, private toastr: ToastrService) { }

  userId: any;
  email: any;


  patch() {
    var user = {
      email: this.email,
    }
    this.service.patchApi(this.userId, user).subscribe({
      next: (res) => {
        this.toastr.success('Success')
      },
       error: (err) => {
        this.toastr.error('Error')
      },
    })
  }
}
