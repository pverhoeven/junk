import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtikelenService } from '@supermarkt/artikelen/data-access';
import { ApplicatieService } from '@supermarkt/shared/data-access';
import { DomeinDropdownComponent } from '@supermarkt/shared/ui';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  OpdrachtStepComponent,
  OpdrachtStepperComponent,
} from '@jkm/shared/ui';

@Component({
  selector: 'jkm-supermarkt-artikelen-feature-overzicht',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DomeinDropdownComponent,
    OpdrachtStepperComponent,
    OpdrachtStepComponent,
  ],
  template: `
    {{ applicatie.state.supermarkt() | json }}
    <hr />
    <a
      href="javascript:void(0);"
      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
      (click)="applicatie.state.kiesSupermarkt('Aldi')"
      >Aldi</a
    >
    of
    <a
      href="javascript:void(0);"
      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
      (click)="applicatie.state.kiesSupermarkt('Lidl')"
      >Lidl</a
    >
    <hr />

    <form [formGroup]="artikelen.form">
      <label>Mag iets<input type="checkbox" formControlName="magIets" /></label>
      <jkm-domein-dropdown
        formControlName="frisdrank"
        domeinsoort="frisdranken"
      ></jkm-domein-dropdown>
      <jkm-domein-dropdown
        formControlName="fruit"
        domeinsoort="fruit"
      ></jkm-domein-dropdown>
    </form>

    {{ artikelen.state() | json }}

    <jkm-opdracht-stepper>
      <jkm-opdracht-step label="x" icoon="olifant">
        <p>This is any content of "Step 1"</p>
      </jkm-opdracht-step>
      <jkm-opdracht-step label="y" icoon="geit">
        <p>This is any content of "Step 2"</p>
      </jkm-opdracht-step>
      <jkm-opdracht-step label="Bijlage" *ngIf="artikelen.state.magIets()">
        <p>This is any content of "Step 3"</p>
      </jkm-opdracht-step>
      <jkm-opdracht-step label="Bijna">
        <p>This is any content of "Step 4"</p>
      </jkm-opdracht-step>
      <jkm-opdracht-step label="Finish">
        <p>This is any content of "Step 5"</p>
      </jkm-opdracht-step>
    </jkm-opdracht-stepper>
  `,
  styles: [],
  providers: [ArtikelenService],
})
export class SupermarktArtikelenFeatureOverzichtComponent {
  applicatie = inject(ApplicatieService);
  artikelen = inject(ArtikelenService);
}
