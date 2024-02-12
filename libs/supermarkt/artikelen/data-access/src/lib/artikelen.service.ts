import { Injectable, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApplicatieService } from '@supermarkt/shared/data-access';
import { signalSlice } from 'ngxtension/signal-slice';
import { map } from 'rxjs';

export interface ArtikelenState {
  magIets: boolean | null | undefined;
  frisdrank: string | null | undefined;
  fruit: string | null | undefined;
}

@Injectable()
export class ArtikelenService {
  applicatie = inject(ApplicatieService);
  fb = inject(FormBuilder);

  private initialState: ArtikelenState = {
    magIets: true,
    frisdrank: undefined,
    fruit: 'appel',
  };

  form = this.fb.group({
    magIets: this.fb.control({ value: false, disabled: false }),
    frisdrank: this.fb.control({ value: '', disabled: false }),
    fruit: this.fb.control({ value: '', disabled: false }),
  });

  boodschappen$ = this.form.valueChanges.pipe(
    map(() => ({ ...this.form.value }))
  );

  state = signalSlice({
    initialState: this.initialState,
    sources: [this.boodschappen$],
    effects: () => ({
      init: () => {
        this.form.patchValue(this.initialState);
      },
    }),
  });
}
