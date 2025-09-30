import { Component } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';

import { NavBar } from '../Componants/nav-bar/nav-bar';
import { Header } from '../Componants/header/header';
import { Search } from '../Componants/search/search';
import { Footer } from '../Componants/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavBar, Header, Search, Footer],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  showHeaderAndSearch = false;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
       
        this.showHeaderAndSearch = event.url === '/' || event.urlAfterRedirects === '/';
      });
  }
}
