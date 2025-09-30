import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './details.html',
  styleUrls: ['./details.css']
})
export class Details implements OnInit {
  movie: any;
  recommendations: any[] = [];
  favorites: any[] = [];
  userRating: number = 0; // ⭐ user’s selected rating

  constructor(private route: ActivatedRoute, private movieService: MovieService) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.movie = this.movieService.getMovieById(id);

    this.recommendations = this.movieService.getMovies().filter((m: any) => m.id !== id);
  }

  toggleFavorite(movie: any) {
    if (this.favorites.includes(movie)) {
      this.favorites = this.favorites.filter(m => m !== movie);
    } else {
      this.favorites.push(movie);
    }
  }

  setRating(star: number) {
    this.userRating = star;
    console.log(`User rated ${this.movie.title}: ${star} stars`);
    // 🔹 Optional: send to backend with movieId & rating
  }
}
