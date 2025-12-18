import { Component } from '@angular/core';
import { SubjectService } from '../../../Services/subject.service';

@Component({
  selector: 'app-subscriber-three',
  templateUrl: './subscriber-three.component.html',
  styleUrl: './subscriber-three.component.scss'
})
export class SubscriberThreeComponent {

  constructor(private service: SubjectService) { }

  data: any;
  subscription: any;

  ngOnInit() {
    this.getData()
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
