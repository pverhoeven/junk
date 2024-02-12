import { Component, QueryList } from '@angular/core';
import { CdkStepper, CdkStepperModule } from '@angular/cdk/stepper';
import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { OpdrachtStepComponent } from './opdracht-step.component';

@Component({
  selector: 'jkm-opdracht-stepper',
  providers: [{ provide: CdkStepper, useExisting: OpdrachtStepperComponent }],
  standalone: true,
  imports: [CommonModule, NgTemplateOutlet, CdkStepperModule],
  template: `<section class="example-container">
    <header>
      <h2>Step {{ selectedIndex + 1 }}/{{ steps.length }}</h2>
    </header>

    <div [ngTemplateOutlet]="selected ? selected.content : null"></div>

    <footer>
      <button cdkStepperPrevious>&larr;</button>
      @for (step of steps; track step; let i = $index) {
      <button
        [class.example-active]="selectedIndex === i"
        (click)="selectStepByIndex(i)"
      >
        {{ step.label }}
      </button>
      }
      <button cdkStepperNext>&rarr;</button>
    </footer>
  </section>`,
  styles: `
    .example-active { color: red}
  `,
})
export class OpdrachtStepperComponent extends CdkStepper {
  override readonly steps: QueryList<OpdrachtStepComponent> =
    new QueryList<OpdrachtStepComponent>();
  selectStepByIndex(index: number): void {
    this.selectedIndex = index;
  }
}
