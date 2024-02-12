import { Component, Input } from '@angular/core';
import { CdkStep, CdkStepperModule } from '@angular/cdk/stepper';
import { CommonModule, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'jkm-opdracht-step',
  providers: [{ provide: CdkStep, useExisting: OpdrachtStepComponent }],
  standalone: true,
  imports: [CommonModule, NgTemplateOutlet, CdkStepperModule],
  template: `<ng-template><ng-content></ng-content></ng-template>`,
  styles: ``,
})
export class OpdrachtStepComponent extends CdkStep {
  @Input() icoon?: string;
}
