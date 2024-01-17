import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtikelenService } from '@supermarkt/artikelen/data-access';
import { ApplicatieService } from '@supermarkt/shared/data-access';
import { DomeinDropdownComponent } from '@supermarkt/shared/ui';

@Component({
  selector: 'jkm-supermarkt-artikelen-feature-overzicht',
  standalone: true,
  imports: [CommonModule, DomeinDropdownComponent],
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

    <jkm-domein-dropdown domeinsoort="frisdranken"></jkm-domein-dropdown>

    <hr />

    <jkm-domein-dropdown domeinsoort="fruit"></jkm-domein-dropdown>
  `,
  styles: [],
  providers: [ArtikelenService],
})
export class SupermarktArtikelenFeatureOverzichtComponent {
  applicatie = inject(ApplicatieService);
  artikelen = inject(ArtikelenService);
}
