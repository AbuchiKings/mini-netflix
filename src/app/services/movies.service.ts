import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IMovie } from '../shared/movie.model';
import movies from '../../api/movies/movies';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor(private http: HttpClient) { }

  public getMovies(): IMovie[] {
    return movies;
  }

  getMovie(id: string): IMovie | undefined {
    return this.getMovies().find(m => m.imdbID === id)
     
  }

}



