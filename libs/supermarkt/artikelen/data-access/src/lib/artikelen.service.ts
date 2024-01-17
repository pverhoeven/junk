import { Injectable, inject } from '@angular/core';
import { ApplicatieService } from '@supermarkt/shared/data-access';
import { Domeinwaarde } from '@supermarkt/shared/interfaces';
import { signalSlice } from 'ngxtension/signal-slice';

export interface ArtikelenState {
  frisdranken: Domeinwaarde[];
  fruit: Domeinwaarde[];
}

@Injectable()
export class ArtikelenService {
  applicatie = inject(ApplicatieService);

  private initialState: ArtikelenState = {
    frisdranken: [],
    fruit: [],
  };

  state = signalSlice({
    initialState: this.initialState,
  });
}
