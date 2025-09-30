import { Routes } from '@angular/router';
import { Movielist } from '../Componants/movielist/movielist';
import { Details } from './details/details';

export const routes: Routes = [
  { path: '', component: Movielist },
  { path: 'details/:id', component: Details }
];
