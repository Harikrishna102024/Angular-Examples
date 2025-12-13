import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor() { }

  userInfo() {
    var userData: any[] = [
      {
        name: 'harikrishna',
        age: 23,
        location: "bengaluru"
      },
      {
        name: 'harini',
        age: 23,
        location: "hyderabad"
      },
      {
        name: 'hansika',
        age: 23,
        location: "chennai"
      },
    ]

    return userData;

  }
}
