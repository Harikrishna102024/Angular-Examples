import { Component } from '@angular/core';
import { AsyncPipeService } from '../../Services/async-pipe.service';

@Component({
  selector: 'app-allpipes',
  templateUrl: './allpipes.component.html',
  styleUrl: './allpipes.component.scss'
})
export class AllpipesComponent {

  constructor(private service: AsyncPipeService){}

  asyncData: any;
  mainData: any[] = []

  name: string = "harikrishna";
  amount: number = 100;
  date = new Date();

  personList: any = [
    {
      name: 'harikrishna',
      gender: 'male',
      age: 24
    },
    {
      name: 'harini',
      gender: 'female',
      age: 23
    }
  ]

  ngOnInit() {
    this.getAsyncData()
  }
  getAsyncData() {
    this.asyncData = this.service.getData();
  }

}
