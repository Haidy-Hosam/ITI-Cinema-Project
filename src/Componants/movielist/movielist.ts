import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MovieService } from '../../app/services/movie.service';
import { MoviesService } from '../../services/movies-service';
import { NgCircleProgressModule } from 'ng-circle-progress';

@Component({
  selector: 'app-movielist',
  standalone: true,
  imports: [CommonModule, RouterModule, NgCircleProgressModule],
  templateUrl: './movielist.html',
  styleUrls: ['./movielist.css']
})
export class Movielist implements OnInit {
  movies: any[] = [];         // من فرع alaa
  movieList: any[] = [];      // من main
  favorites: any[] = [];
  alertMessage: string = '';
  alertType: string = ''; // "success" or "danger"

  constructor(private movieService: MovieService, private mov: MoviesService) {}

  ngOnInit() {
    // بيانات من alaa
    this.movies = this.movieService.getMovies();

    // بيانات من main (API)
    this.mov.getallMovies().subscribe({
      next: (data) => {
        console.log(data);
        this.movieList = data.results;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  toggleFavorite(movie: any) {
    const index = this.favorites.indexOf(movie);
    if (index > -1) {
      this.favorites.splice(index, 1);
      this.alertMessage = `Removed "${movie.title}" from favorites.`;
      this.alertType = 'danger';
    } else {
      this.favorites.push(movie);
      this.alertMessage = `Added "${movie.title}" to favorites.`;
      this.alertType = 'success';
    }

    setTimeout(() => {
      this.alertMessage = '';
    }, 3000);
  }

  closeAlert() {
    this.alertMessage = '';
  }

  getColor(rating: number): string {
    if (rating >= 70) return '#21d07a';   // أخضر
    if (rating >= 50) return '#d2d531';   // أصفر
    return '#db2360';                     // أحمر
  }
}
