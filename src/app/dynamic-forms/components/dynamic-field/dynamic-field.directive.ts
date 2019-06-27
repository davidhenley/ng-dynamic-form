import { Component, ComponentFactoryResolver, ComponentRef, Directive, Input, OnInit, ViewContainerRef } from '@angular/core';
import { ControlConfiguration } from '../../containers/dynamic-form/dynamic-form.component';
import { FormGroup } from '@angular/forms';
import { FormButtonComponent } from '../form-button/form-button.component';
import { FormInputComponent } from '../form-input/form-input.component';
import { FormSelectComponent } from '../form-select/form-select.component';

interface ComponentLookupItem {
  [key: string]: any;
}

const components: ComponentLookupItem = {
  button: FormButtonComponent,
  input: FormInputComponent,
  select: FormSelectComponent
};

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[dynamicField]'
})
export class DynamicFieldDirective implements OnInit {
  @Input()
  config: ControlConfiguration;

  @Input()
  group: FormGroup;

  component: ComponentRef<any>;

  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) { }

  ngOnInit() {
    const component = components[this.config.type];
    const factory = this.resolver.resolveComponentFactory<any>(component);
    this.component = this.container.createComponent(factory);
    this.component.instance.config = this.config;
    this.component.instance.group = this.group;
  }
}
