import { Component ,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesService } from '../../services/movies-service';
import { NgCircleProgressModule } from 'ng-circle-progress';

@Component({
  selector: 'app-movielist',
  imports: [CommonModule , NgCircleProgressModule],
  templateUrl: './movielist.html',
  styleUrl: './movielist.css'
})
export class Movielist implements OnInit{
  movieList: any[] = [];
  // Dependency injection
  constructor(private mov:MoviesService) {} // كده انا علي طول كريت اوبجكت من السيرفس دي
  ngOnInit(){
    this.mov.getallMovies().subscribe({
    next:(data)=>{
      console.log(data);
      this.movieList = data.results;
    },error:(err)=>{
      console.log(err);
    },
  });
  }
//************************************************************//
  favorites: any[] = [];
  alertMessage: string = '';
  alertType: string = ''; // "success" or "danger"

  toggleFavorite(movie: any) {
    const index = this.favorites.indexOf(movie);

    if (index > -1) {
      // Remove
      this.favorites.splice(index, 1);
      this.alertMessage = `Removed "${movie.title}" from favorites.`;
      this.alertType = 'danger';
    } else {
      // Add
      this.favorites.push(movie);
      this.alertMessage = `Added "${movie.title}" to favorites.`;
      this.alertType = 'success';
    }

    // اخفي الاليرت بعد 3 ثواني
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


