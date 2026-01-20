import { Routes } from '@angular/router';

export const routes: Routes = [ { path: '',  loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'projets',  loadChildren: () => import('./pages/projets/projets.module').then(m => m.ProjetsModule)},
  { path: 'contact',  loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule)}];
