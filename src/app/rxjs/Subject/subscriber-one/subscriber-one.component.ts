import { Component } from '@angular/core';
import { SubjectService } from '../../../Services/subject.service';

@Component({
  selector: 'app-subscriber-one',
  templateUrl: './subscriber-one.component.html',
  styleUrl: './subscriber-one.component.scss'
})
export class SubscriberOneComponent {

  constructor(private service: SubjectService){}

  data: any;
  subscription: any;

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.subscription = this.service.subject.subscribe((value: any) => {
      this.data = value;
    })
  }

  cancel() {
    this.subscription.unsubscribe();
  }
  resume() {
    this.getData();
  }

}
