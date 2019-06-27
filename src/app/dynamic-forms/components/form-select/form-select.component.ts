import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ControlConfiguration } from '../../containers/dynamic-form/dynamic-form.component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'form-select',
  template: `
    <div class="dynamic-field form-select" [formGroup]="group">
      <label>{{config.label}}</label>
      <select
        [formControlName]="config.name">
        <option value>{{config.placeholder}}</option>
        <option *ngFor="let option of config.options">{{option}}</option>
      </select>
    </div>
  `,
  styles: []
})
export class FormSelectComponent implements OnInit {
  config: ControlConfiguration;
  group: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
