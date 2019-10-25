import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot } from '@angular/router';
import { MovieListResolved } from '../shared/movie.model';
import { Observable, of } from 'rxjs';
import { MoviesService } from './movies.service';
import { map, catchError } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class MovieListResolver implements Resolve<MovieListResolved>{
    constructor(private movieservice: MoviesService) { }

    resolve(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<MovieListResolved> {

        return this.movieservice.getMovies().pipe(
            map(movies => ({ movies })),
            catchError(error => {
                const message = `Movie retrieval error: ${error.message}`;
                console.log(message);
                return of({ movies: null, error: message })
            })
        );
    }
}