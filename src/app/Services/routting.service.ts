import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouttingService {

  constructor(private http: HttpClient) { }

  // private courses = [
  //   {
  //     id: 1,
  //     title: 'HTML',
  //     price: 100,
  //   },
  //   {
  //     id: 2,
  //     title: 'CSS',
  //     price: 200,
  //     description: 'Styling and layout course'
  //   },
  //   {
  //     id: 3,
  //     title: 'Angular',
  //     price: 500,
  //     description: 'Full Angular development course'
  //   }
  // ];

  // getCourseById(ID: any): Observable<any> {
  //   const course = this.courses.find(data => data.id == ID)
  //   return of(course)
  // }

  getProductsById(ID: any): Observable<any> {
    var apiData = this.http.get(`https://fakestoreapi.com/products/${ID}`)
    return apiData;
  }

  getProductsByQuery(ID: any) {
    var params = {
      id : ID,
    }
    var result = this.http.get('https://api.restful-api.dev/objects',{params});
    return result
  }



}
