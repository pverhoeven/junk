import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomeinStateService } from '@supermarkt/shared/data-access';

@Component({
  selector: 'jkm-domein-dropdown',
  standalone: true,
  imports: [CommonModule],
  template: `{{ domeinen.lijst(domeinsoort) | json }}`,
  styles: ``,
})
export class DomeinDropdownComponent {
  domeinen = inject(DomeinStateService);

  @Input() domeinsoort: string = '';
}
