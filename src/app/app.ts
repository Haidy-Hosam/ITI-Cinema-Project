import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Search } from "../Componants/search/search";
import { NavBar } from "../Componants/nav-bar/nav-bar";
import { Footer } from "../Componants/footer/footer";
import { Header } from "../Componants/header/header";
import { Movielist } from "../Componants/movielist/movielist";
';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Search, NavBar, Footer, Header, Movielist],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('project');
}
