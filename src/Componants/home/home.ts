import { Component } from '@angular/core';
import { Header } from '../../Componants/header/header';
import { Movielist } from '../../Componants/movielist/movielist';

@Component({
  selector: 'app-home',
  imports: [Header, Movielist],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
