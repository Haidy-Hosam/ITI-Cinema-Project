import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MoviesService } from '../../services/movies-service';

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
  userRating: number = 0;

  constructor(private route: ActivatedRoute, private moviesService: MoviesService) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));

      // نجيب كل الأفلام من API
      this.moviesService.getallMovies().subscribe((response: any) => {
        const movies = response.results; // حسب صيغة الرد من TMDB
        this.movie = movies.find((m: any) => m.id === id);
        this.recommendations = movies.filter((m: any) => m.id !== id);
        this.userRating = 0;
        this.favorites = [];
      });
    });
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
  }
}
