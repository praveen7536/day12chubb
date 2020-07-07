import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(public http: HttpClient) { }
  productData
  productid;
  getService(): Observable<any> {
    return this.http.get(
      "https://5f0486578b06d60016ddecb8.mockapi.io/users"
    ).pipe(
      catchError(err => {
        console.log(err)
        return err
      })
    );
  }
  







}

