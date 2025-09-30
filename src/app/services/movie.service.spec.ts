import { TestBed } from '@angular/core/testing';
import { MovieService } from './movie.service';

describe('MovieService', () => {
  let service: MovieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return movies', () => {
    const movies = service.getMovies();
    expect(movies.length).toBeGreaterThan(0);
  });

  it('should return a movie by id', () => {
    const movie = service.getMovieById(755898); // ID لفيلم War of the Worlds
    expect(movie?.title).toBe('War of the Worlds');
  });
});
