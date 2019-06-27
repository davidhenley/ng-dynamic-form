import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ControlConfiguration } from '../../containers/dynamic-form/dynamic-form.component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'form-input',
  template: `
    <div class="dynamic-field form-input" [formGroup]="group">
      <label>{{config.label}}</label>
      <input
        type="text"
        [attr.placeholder]="config.placeholder"
        [formControlName]="config.name">
    </div>
  `,
  styles: []
})
export class FormInputComponent implements OnInit {
  config: ControlConfiguration;
  group: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
