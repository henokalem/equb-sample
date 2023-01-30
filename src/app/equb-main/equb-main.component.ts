import { Component } from '@angular/core';
import { ApiServiceService } from './api-service.service';
import { FormBuilder } from '@angular/forms';
import { NewAgeObject } from '../types/newAgeObject';
import { FormInputObject } from '../types/formInputObject';
import { userObject } from '../types/userObject';
import { Observable } from 'rxjs';
import { NestedJsonService } from './nested-json.service';
import { NestedObject } from '../types/NestedObject';
import { v4 as uuidv4 } from 'uuid';;

@Component({
  selector: 'app-equb-main',
  templateUrl: './equb-main.component.html',
  styleUrls: ['./equb-main.component.scss']
})
export class EqubMainComponent {
  constructor(
    private formBuilder: FormBuilder,
    private api_service: ApiServiceService,
    private nested_json_service: NestedJsonService,
  ) {
    this.new_age_object_2 = {} as NewAgeObject;
    this.nested_object = {} as NestedObject;
  }

  new_age_object_2: NewAgeObject;
  nested_object : NestedObject;

  formInput = this.formBuilder.group({
    name: '',
    userId: null,
    hidden_input: uuidv4(),
  });

  onSubmit(): void {
    console.log("HERE", this.formInput.value);
    // let form_input_object : FormInputObject;
    let form_input_object = {
      name: this.formInput.value.name,
      userId: this.formInput.value.userId
    } as FormInputObject;

    let observable: Observable<any> = this.api_service.getNewAge(form_input_object);

    observable.subscribe(data => {
      let user_objects : userObject[] = data;
      console.log(user_objects);
    });

    let nested_observable: Observable<any> = this.nested_json_service.getApi();
    nested_observable.subscribe(data => {
      this.nested_object = data;
      console.log(this.nested_object);
      // this.nested_object.bpi.eur = data.bpi.eur;
      // this.nested_object.bpi.usd = data.bpi.usd;
      // this.nested_object.bpi.gbp = data.bpi.gbp;

      // this.nested_object.time.updated = data.time.updated;
      // this.nested_object.time.updatedISO = data.time.updatedISO;
      // this.nested_object.time.updateduk = data.time.updateduk;

      // this.nested_object.chartName = data.chartName;

      // this.nested_object.disclamer = data.disclamer;

    });

    // console.log(uuid.v4());
    // let new_age_object = {
    //   name: form_input_object.name,
    //   age: form_input_object.age
    // } as NewAgeObject;
    // this.new_age_object = new_age_object;

    // alert("Submitted");
  }
}
