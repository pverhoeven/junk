import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'supermarkt',
    loadChildren: () =>
      import('@supermarkt/feature/shell').then((m) => m.featureRoutes),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'supermarkt',
  },
];
