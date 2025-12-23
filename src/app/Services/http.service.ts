import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getApiData(): Observable<any> {
    const getApi = this.http.get('https://fakestoreapi.com/users')
    return getApi
  }

  postApi(userData: any): Observable<any> {
    console.log(userData)
    return this.http.post('https://fakestoreapi.com/users',userData)
  }

  putApi(ID: any, DATA:any): Observable<any> {
    console.log(ID,DATA)
    return this.http.put(`https://fakestoreapi.com/users/${ID}`, DATA);
  }

  patchApi(ID: any, DATA:any): Observable<any> {
    console.log(ID,DATA)
    return this.http.patch(`https://fakestoreapi.com/users/${ID}`, DATA);
  }

  deleteApi(ID: any): Observable<any> {
    console.log(ID)
    return this.http.delete(`https://fakestoreapi.com/users/${ID}`);
  }

}
