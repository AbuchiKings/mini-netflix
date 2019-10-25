import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot } from '@angular/router';
import { MovieResolved } from '../shared/movie.model';
import { Observable, of } from 'rxjs';
import { MoviesService } from './movies.service';
import { map, catchError } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class MovieResolver implements Resolve<MovieResolved>{
    constructor(private movieservice: MoviesService) { }

    resolve(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<MovieResolved> {
        const id = route.paramMap.get('id');
        let regx: RegExp = /^tt[0-9]{7}$/;
        let check: boolean = regx.test(id);
        if (check === false) {
            const message: string = 'Invalid movie id';
            console.log(message);

            return of({ movie: null, error: message });
        }
        return this.movieservice.getMovie(id).pipe(
            map(movie => ({ movie })),
            catchError(error => {
                const message = 'Movie retrieval error';
                console.log(message);
                return of({ movie: null, error: message })
            })
        );
    }
}