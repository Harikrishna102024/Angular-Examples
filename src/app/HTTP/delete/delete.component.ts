import { Component } from '@angular/core';
import { HttpService } from '../../Services/http.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.scss'
})
export class DeleteComponent {

  constructor(private service: HttpService) { }

  userId: any;

  deleteData() {
    this.service.deleteApi(this.userId).subscribe({
      next: (res) => {
        console.log("Success", res)
      },
      error: (err) => {
        console.log("Error", err)
      },
    })
  }
}
