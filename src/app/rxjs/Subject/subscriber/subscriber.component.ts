import { Component } from '@angular/core';
import { SubjectService } from '../../../Services/subject.service';

@Component({
  selector: 'app-subscriber',
  templateUrl: './subscriber.component.html',
  styleUrl: './subscriber.component.scss'
})
export class SubscriberComponent {

  constructor(private service: SubjectService){}

  getData() {
    this.service.increment();
  }

}
