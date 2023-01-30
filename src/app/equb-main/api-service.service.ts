import { Injectable } from '@angular/core';
import { NewAgeObject } from '../types/newAgeObject';
import { FormInputObject } from '../types/formInputObject';
import { HttpClient, HttpHeaders, HttpParams, HttpParamsOptions } from '@angular/common/http'
import { Observable } from 'rxjs';

// const URL = 'https://api.agify.io/?name=';
const URL = 'https://jsonplaceholder.typicode.com/posts';

@Injectable()
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  getNewAge(from_input_object: FormInputObject) : Observable<any> {
    // let param_options: HttpParamsOptions = new HttpParamsOptions();
    // options: HttpParamsOptions = {} as HttpParamsOptions;
    // param_options.fromObject({userId: 1});
    let param : HttpParams = new HttpParams();
    if (from_input_object.userId) {
      param = new HttpParams({fromObject: {
        'userId' : from_input_object.userId
      }});
    }

    return this.http.get(URL, {params: param});
  }
}
