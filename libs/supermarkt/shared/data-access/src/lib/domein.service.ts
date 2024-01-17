import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, from, map, shareReplay, switchMap } from 'rxjs';
import { ApplicatieService } from './applicatie.service';
import { Domein, Domeinwaarde } from '@supermarkt/shared/interfaces';
import { signalSlice } from 'ngxtension/signal-slice';

export interface DomeinState {
  domeinen: Domein[];
}

@Injectable({ providedIn: 'root' })
export class DomeinService {
  http = inject(HttpClient);
  applicatie = inject(ApplicatieService);

  private domeinAldi$: Observable<Domein[]>;
  private domeinLidl$: Observable<Domein[]>;

  opgehaaldeDomeinwaarden$ = from(this.applicatie.state.kiesSupermarkt$).pipe(
    switchMap(() => {
      const domein$ = this.applicatie.state.isLidlActief()
        ? this.domeinLidl$
        : this.domeinAldi$;
      return domein$.pipe(map((domeinen) => ({ domeinen })));
    })
  );

  private initialState: DomeinState = {
    domeinen: [],
  };

  state = signalSlice({
    initialState: this.initialState,
    sources: [this.opgehaaldeDomeinwaarden$],
  });

  constructor() {
    this.domeinAldi$ = this.getDomeinen('aldi');
    this.domeinLidl$ = this.getDomeinen('lidl');
  }

  private getDomeinen(supermarkt: string): Observable<Domein[]> {
    return this.http
      .get<Domein[]>('assets/' + supermarkt + '.json')
      .pipe(shareReplay(1));
  }

  public lijst(domeinsoort: string): Domeinwaarde[] {
    const domein = this.getDomein(domeinsoort);
    return domein ? domein.waarden : [];
  }
  private getDomein(domeinsoort: string) {
    return this.state.domeinen().find((domein) => domein.naam === domeinsoort);
  }
}
