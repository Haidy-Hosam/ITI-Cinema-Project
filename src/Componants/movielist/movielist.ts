import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MovieService } from '../../app/services/movie.service';

@Component({
  selector: 'app-movielist',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './movielist.html',
  styleUrls: ['./movielist.css']
})
export class Movielist implements OnInit {
  movies: any[] = [];
  favorites: any[] = [];  // ✅ عشان نخزن الأفلام المفضلة

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.movies = this.movieService.getMovies();
  }

  toggleFavorite(movie: any) {
    if (this.favorites.includes(movie)) {
      this.favorites = this.favorites.filter(m => m !== movie);
    } else {
      this.favorites.push(movie);
    }
  }
}
