import { Component } from '@angular/core';
import { ControlConfiguration } from './dynamic-forms/containers/dynamic-form/dynamic-form.component';

@Component({
  selector: 'app-root',
  template: `
    <div class="app">
      <dynamic-form [config]="config" (submitted)="formSubmitted($event)"></dynamic-form>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  config: ControlConfiguration[] = [
    {
      type: 'input',
      label: 'Full Name',
      name: 'name',
      placeholder: 'Enter your name'
    },
    {
      type: 'select',
      label: 'Favorite food',
      name: 'food',
      options: ['Pizza', 'Hot Dogs', 'Knakworsteje', 'Coffee'],
      placeholder: 'Select an option'
    },
    {
      label: 'Submit',
      name: 'submit',
      type: 'button'
    }
  ];

  formSubmitted(value): void {
    console.log(value);
  }
}
