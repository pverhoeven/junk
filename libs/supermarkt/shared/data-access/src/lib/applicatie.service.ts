import { Injectable } from '@angular/core';
import { Supermarkt } from '@supermarkt/shared/interfaces';
import { signalSlice } from 'ngxtension/signal-slice';
import { Observable, map } from 'rxjs';

export interface ApplicatieState {
  supermarkt: Supermarkt;
}

@Injectable({ providedIn: 'root' })
export class ApplicatieService {
  private initialState: ApplicatieState = {
    supermarkt: undefined,
  };

  state = signalSlice({
    initialState: this.initialState,
    actionSources: {
      kiesSupermarkt: (state, action$: Observable<Supermarkt>) =>
        action$.pipe(
          map((supermarkt) => ({
            supermarkt,
          }))
        ),
    },
    selectors: (state) => ({
      isLidlActief: () => state().supermarkt === 'Lidl',
    }),
    effects: (state) => ({
      log: () => {
        console.log('Gekozen voor', state.supermarkt());
      },
    }),
  });

  constructor() {
    // direct this.state.kiesSupermarkt('Aldi') werkt niet
    setTimeout(() => this.state.kiesSupermarkt('Aldi'), 50);
  }
}
