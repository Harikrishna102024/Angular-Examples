import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouttingService } from '../../Services/routting.service';

@Component({
  selector: 'app-rout-parameters',
  templateUrl: './rout-parameters.component.html',
  styleUrl: './rout-parameters.component.scss'
})
export class RoutParametersComponent {


  constructor(private route: ActivatedRoute, private service: RouttingService) { }

  id: any;
  courseData: any[] = []

  ngOnInit() {
    this.getCourseData();
  }

  getCourseData() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.getData(this.id);
    });
  }

  getData(id: any) {
    this.service.getProductsById(id).subscribe((data: any) => {
      this.courseData.push(data);
    });
  }
}




