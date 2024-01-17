import { Route } from '@angular/router';
import { ShellComponent } from './shell.component';

export const featureRoutes: Route[] = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: 'artikelen',
        loadComponent: () =>
          import('@supermarkt/artikelen/feature/overzicht').then(
            (m) => m.SupermarktArtikelenFeatureOverzichtComponent
          ),
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'artikelen',
      },
    ],
  },
];
