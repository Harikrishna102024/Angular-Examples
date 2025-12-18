import { Component } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-simple-subject',
  templateUrl: './simple-subject.component.html',
  styleUrl: './simple-subject.component.scss'
})
export class SimpleSubjectComponent {

  ngOnInit() {
    // this.subject();
    // this.behaviourSubject();
    this.replySubject();
    // this.asyncSubject()
  }

  subject() {
    const subject = new Subject<number>();

    subject.subscribe((data: any) => {
      console.log("AAA - ", data)
    })
    subject.next(1);
    subject.next(2);

    subject.subscribe((data: any) => {
      console.log("BBBBB - ", data)
    });
    subject.next(3);
    subject.next(4);
  }

  behaviourSubject() {
    const bsubject = new BehaviorSubject<any>(0);

    bsubject.next(1);
    bsubject.next(2);
    bsubject.next(3);
    bsubject.next(4);

    bsubject.subscribe((data: any) => {
      console.log("AAA - ", data)
    })

    bsubject.next(5);
    bsubject.next(6);

    bsubject.subscribe((data: any) => {
      console.log("BBBBB - ", data)
    })



  }

  replySubject() {
    const rpsubject = new ReplaySubject<any>();

    rpsubject.next(1);
    rpsubject.next(2);
    rpsubject.next(3);
    rpsubject.next(4);

    rpsubject.subscribe((data: any) => {
      console.log("AAA - ", data)
    })
    rpsubject.next(5);

    rpsubject.subscribe((data: any) => {
      console.log("BBBBB - ", data)
    })
    rpsubject.next(6);
  }

  asyncSubject() {
    const asubject = new AsyncSubject<any>();
    asubject.next(1);
    asubject.next(2);
    asubject.next(3);
    asubject.next(4);
    asubject.next(5);
    asubject.next(6);

    asubject.subscribe((data: any) => {
      console.log("AAA - ", data)
    })

    asubject.subscribe((data: any) => {
      console.log("BBBBB - ", data)
    })

    asubject.subscribe((data: any) => {
      console.log("CCCCC - ", data)
    })

    asubject.complete();

  }

}
