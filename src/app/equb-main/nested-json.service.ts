import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpParamsOptions } from '@angular/common/http'
import { Observable } from 'rxjs';

const URL = 'https://api.coindesk.com/v1/bpi/currentprice.json';

@Injectable({
  providedIn: 'root'
})
export class NestedJsonService {

  constructor(private http: HttpClient) { }

  getApi() : Observable<any> {
    return this.http.get(URL);
  }
}
