import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

export interface ControlConfiguration {
  type: string;
  name: string;
  label: string;
  placeholder?: string;
  options?: string[];
}

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dynamic-form',
  template: `
    <form class="dynamic-form" (ngSubmit)="submitted.emit(form.value)" [formGroup]="form">
      <ng-container
        *ngFor="let field of config"
        dynamicField [config]="field"
        [group]="form"></ng-container>
    </form>
  `,
  styles: []
})
export class DynamicFormComponent implements OnInit {
  @Input()
  config: ControlConfiguration[];

  @Output()
  submitted = new EventEmitter();

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.config = [];
  }

  ngOnInit() {
    this.form = this.createGroup();
  }

  createGroup() {
    const group = this.fb.group({});
    this.config.forEach(control =>
      group.addControl(control.name, this.fb.control(null)));
    return group;
  }
}
