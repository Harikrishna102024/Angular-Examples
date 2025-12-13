import { Component } from '@angular/core';
import { RouttingService } from '../../Services/routting.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-routing-queryparams',
  templateUrl: './routing-queryparams.component.html',
  styleUrl: './routing-queryparams.component.scss'
})
export class RoutingQueryparamsComponent {

  constructor(private service: RouttingService, private router: Router) { }

  id: any;

  search() {

    this.router.navigate(['/products'], {
      queryParams : {
        id : this.id,
      }
    })

    this.service.getProductsByQuery(this.id).subscribe((res: any) => {
      if(res) {
        res.forEach((data: any) => {
          console.log("****************",data)
        })
      }
    });
  }


}
