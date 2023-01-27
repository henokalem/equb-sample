import {NgModule} from '@angular/core';
import {A11yModule} from '@angular/cdk/a11y';

import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
// import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  exports: [
    A11yModule,
    MatButtonModule,
    MatInputModule,
  ]
})
export class MaterialModule {}
