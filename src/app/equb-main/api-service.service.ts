import { Injectable } from '@angular/core';
import { NewAgeObject } from '../types/newAgeObject';
import { FormInputObject } from '../types/formInputObject';
import { HttpClient, HttpHeaders } from '@angular/common/http'

const URL = 'https://api.agify.io/?name=';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  getNewAge(from_input_object: FormInputObject) {
    let new_age_object = {
      name: from_input_object.name,
      age: from_input_object.age
    } as NewAgeObject;

    
    let combined_url = URL + new_age_object.name;

    return this.http.get(combined_url, this.httpOptions);
  }
}
