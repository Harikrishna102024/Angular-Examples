import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, filter, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OperatorsService {

  constructor(private http: HttpClient) { }

  api() {
    var data = this.http.get<any>('https://fakestoreapi.com/products')
    return data
  }

  getPipe() {
    var data = this.api().pipe (
      map(data =>
        data.filter((f: any) => f.price < 100)
          .map((m: any) => ({
            ...m,
            price: m.price * 100
          }))
      )
    )
    return data
  }


  getMap() {
    var data = this.api().pipe (
      map(data => data.map((m:any) => ({
        ...m,
        price : m.price * 0
      })))
    )
    return data
  }

  getFilter() {
    var data = this.api().pipe(
      map(data => data.filter((f:any) => f.price < 20 ))
    )
    return data
  }

  getCatchError() {
     var data = this.api().pipe(
      catchError(error => {
        // do operations here
        console.log("API fail")
        return of(['apiFail'])
      })
    );
    return data
  }

}
