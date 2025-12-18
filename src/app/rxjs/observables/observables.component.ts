import { Component, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrl: './observables.component.scss'
})
export class ObservablesComponent {

  sunscription!: any;
  msgs!: any;

  observable = new Observable<any>((observar) => {
    setTimeout(() => {
      observar.next("first");
    }, 1000),
      setTimeout(() => {
        observar.next("second");
      }, 2000),
      setTimeout(() => {
        observar.next("third");
      }, 3000),
      setTimeout(() => {
        observar.next("fourth");
      }, 4000)
      setTimeout(() => {
        observar.complete()
      }, 8000)
  })


  display() {
    this.sunscription = this.observable.subscribe((data: any) => {
      this.msgs = data
    })
  }

  unSubData() {
    this.sunscription.unsubscribe();
  }




  // display() {
  //   this.observable.subscribe({
  //     next: (data: any) => {
  //       console.log(data)
  //     },
  //     error: (error: any) => {
  //       console.log(error)
  //     },
  //     complete() {
  //       console.log("completed")
  //     },
  //   })

  // }

}
