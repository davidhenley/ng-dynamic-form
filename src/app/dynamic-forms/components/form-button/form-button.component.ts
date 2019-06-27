import { Component, OnInit } from '@angular/core';
import { ControlConfiguration } from '../../containers/dynamic-form/dynamic-form.component';
import { FormGroup } from '@angular/forms';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'form-button',
  template: `
    <div class="dynamic-field form-button" [formGroup]="group">
      <button type="submit">{{config.label}}</button>
    </div>
  `,
  styles: []
})
export class FormButtonComponent implements OnInit {
  config: ControlConfiguration;
  group: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
