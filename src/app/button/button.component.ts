import { Component, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: 'button.component.html',
  styleUrls: ['button.component.scss'],
})
export class ButtonComponent  {
  @Input() color: 'primary' | 'success' | 'danger' = 'primary';
  @Input() disabled: boolean = false;
  @Input() outline: boolean = false;

  rootClass: string;
  classMap: any;

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    // Get the component selector ('app-button')
    this.rootClass = this.elementRef.nativeElement.tagName.toLowerCase();
    this.updateClassMap();
  }

  ngOnChanges() {
    this.updateClassMap();
  }

  updateClassMap() {
    // If a key has a truthy value, the class is added. If the key is falsy the class gets removed.
    this.classMap = {
      [`${this.rootClass}`]: true,
      [`${this.rootClass}--${this.color}`]: !!this.color,
      [`${this.rootClass}--outline`]: this.outline,
      [`${this.rootClass}--disabled`]: this.disabled,
    };
  }
}
