import { Component, Input } from '@angular/core';
import { NewAgeObject } from 'src/app/types/newAgeObject';
import { NestedObject } from 'src/app/types/NestedObject';

@Component({
  selector: 'app-result-component',
  templateUrl: './result-component.component.html',
  styleUrls: ['./result-component.component.scss']
})
export class ResultComponentComponent {
  @Input() new_age_object: NewAgeObject; // decorate the property with @Input()
  @Input() nested_object: NestedObject;
  constructor() {
    this.new_age_object = {} as NewAgeObject;
    this.nested_object = {} as NestedObject;
  }
}
