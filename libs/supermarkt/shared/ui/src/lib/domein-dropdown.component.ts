import {
  ChangeDetectionStrategy,
  Component,
  Input,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomeinService } from '@supermarkt/shared/data-access';
import { NG_VALUE_ACCESSOR, SelectControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'jkm-domein-dropdown',
  standalone: true,
  imports: [CommonModule],
  template: `<select [id]="formControlName">
    <option></option>
    <option
      *ngFor="let option of domeinen.lijst(domeinsoort)"
      [selected]="option.code === value"
      [value]="option.code"
    >
      {{ option.omschrijving }}
    </option>
  </select> `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: DomeinDropdownComponent,
      multi: true,
    },
  ],
})
export class DomeinDropdownComponent extends SelectControlValueAccessor {
  domeinen = inject(DomeinService);
  @Input() domeinsoort: string = '';
  @Input() formControlName: string = '';
}
