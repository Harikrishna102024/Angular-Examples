import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor() { }

  subject = new Subject<any>();
  // subject = new BehaviorSubject<any>(0);

  count: number = 0;

  increment() {
    setInterval(() => {
      this.count++
      this.subject.next(this.count)
    }, 1000);
  }

}
