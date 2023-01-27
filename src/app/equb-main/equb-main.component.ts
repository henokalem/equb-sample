import { Component } from '@angular/core';
// import { ApiServiceService } from './api-service.service';
import { FormBuilder } from '@angular/forms';
import { NewAgeObject } from '../types/newAgeObject';
import { FormInputObject } from '../types/formInputObject';

@Component({
  selector: 'app-equb-main',
  templateUrl: './equb-main.component.html',
  styleUrls: ['./equb-main.component.scss']
})
export class EqubMainComponent {
  constructor(
    private formBuilder: FormBuilder,
    // private api_service: ApiServiceService,
  ) {
    this.new_age_object = {} as NewAgeObject;
  }

  new_age_object: NewAgeObject;

  formInput = this.formBuilder.group({
    name: '',
    age: null
  });

  onSubmit(): void {
    console.log(this.formInput.value);
    // let form_input_object : FormInputObject;
    let form_input_object = {
      name: this.formInput.value.name,
      age: this.formInput.value.age
    } as FormInputObject;

    // this.api_service.getNewAge(form_input_object).subscribe(data => {

    //   console.log(data);
    //   let new_age_object = data.new
    // });

    let new_age_object = {
      name: form_input_object.name,
      age: form_input_object.age
    } as NewAgeObject;
    this.new_age_object = new_age_object;

    alert("Submitted");
  }
}
