import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor(private http:HttpClient){}
  getallMovies(): Observable<any>{
    return this.http.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${environment.api_key}`);
  }

  private apiUrl = 'https://api.themoviedb.org/3/search/movie';
  private apiUrl2 = 'https://api.themoviedb.org/3';
  private apiKey = '457713e002a0c827786afbc6f09ed5a0';
  searchMovies(query: string, page: number = 1): Observable<any> {
    return this.http.get(this.apiUrl, {
      params: {
        api_key: this.apiKey,
        query: query,
        page: page,
        language: 'en-US',
        include_adult: false
      }
    });
  }
    getDefaultMovies(): Observable<any> {
    return this.http.get(`${this.apiUrl2}/movie/popular`, {
      params: {
        api_key: this.apiKey,
        language: 'en-US',
        page: 1
      }
    });
  }
  
}



