import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AsyncPipeService {

  constructor() { }


  getData(): Observable<any[]> {
    const data = [
  {
    name: 'hari',
    age: 21
  },
  {
    name: 'harini',
    age: 21
  },
  {
    name: 'haritha',
    age: 17
  },
    ]
    return of(data)
  }

  // getData() {
  //   const observable = new Observable((observer: any) => {
  //     observer.next(
  //       [
  //         {
  //           name: 'hari',
  //           age: 21
  //         },
  //         {
  //           name: 'harini',
  //           age: 21
  //         },
  //         {
  //           name: 'haritha',
  //           age: 21
  //         }
  //       ]
  //     )
  //     observer.complete()
  //   });

  //   return observable
  // }
}
