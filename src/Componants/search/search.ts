import { Component ,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesService } from '../../services/movies-service';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-search',
  imports: [NgCircleProgressModule ,CommonModule, FormsModule],
  templateUrl: './search.html',
  styleUrl: './search.css'
})
export class Search implements OnInit{
query: string = '';
  movies: any[] = [];
  querySearched = false;

   constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.loadDefaultMovies();
  }

  // الافتراضي
  loadDefaultMovies() {
    this.moviesService.getDefaultMovies().subscribe((response: { results: any[]; }) => {
      this.movies = response.results;
      this.querySearched = false;
    });
  }

  // البحث
  onSearch() {
    if (!this.query.trim()) {
      this.loadDefaultMovies();
      return;
    }

    this.moviesService.searchMovies(this.query).subscribe((response: { results: any[]; }) => {
      this.movies = response.results;
      this.querySearched = true;
    });
  }
}
