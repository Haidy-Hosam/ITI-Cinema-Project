import { Routes } from '@angular/router';
import { Movielist } from '../Componants/movielist/movielist';
import { Search } from '../Componants/search/search';
import { Header } from '../Componants/header/header';
import { Home } from '../Componants/home/home';

export const routes: Routes = [
    // { path: 'movies', component: Movielist },
    { path: '', component: Home },   
    { path: 'search', component: Search },  
    // { path: '', redirectTo: 'home', pathMatch: 'full' }
];
