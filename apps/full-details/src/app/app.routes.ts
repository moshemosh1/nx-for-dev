import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'products',
    loadComponent: () =>
      import('@cms-monoripo/ui').then((m) => m.ReusableAutocompleteComponent),
  },
];
