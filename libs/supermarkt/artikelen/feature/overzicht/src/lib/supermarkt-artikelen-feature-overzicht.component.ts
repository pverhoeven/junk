import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtikelenService } from '@supermarkt/artikelen/data-access';
import { ApplicatieService } from '@supermarkt/shared/data-access';
import { DomeinDropdownComponent } from '@supermarkt/shared/ui';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'jkm-supermarkt-artikelen-feature-overzicht',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DomeinDropdownComponent,
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
  `,
  styles: [],
  providers: [ArtikelenService],
})
export class SupermarktArtikelenFeatureOverzichtComponent {
  applicatie = inject(ApplicatieService);
  artikelen = inject(ArtikelenService);
}
