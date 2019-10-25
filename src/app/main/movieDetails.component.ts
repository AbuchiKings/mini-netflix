import { Component, OnInit, OnDestroy } from "@angular/core";
import { IMovie, MovieResolved } from '../shared/movie.model';
import { ActivatedRoute, Router } from '@angular/router';
import { FavouritesService } from '../services/favourites.service';


@Component({
    templateUrl: './movieDetails.component.html',
    styleUrls: ['./movieDetails.component.css']
})
export class MovieDetailsComponent implements OnInit, OnDestroy {

    constructor(private route: ActivatedRoute,
        private router: Router,
        private favouritesService: FavouritesService) {

    }


    movie: IMovie;
    favourites: string[];
    errorMessage;
    pageTitle: string;

    handleChanges(target: any): void {
        this.favouritesService.toggleFavourites(target, this.favourites)
    }

    back(): void {
        let returnPath = this.route.snapshot.queryParamMap.get('r');
        if (returnPath) {
           this.router.navigate([returnPath])
            return;
        }
        this.router.navigate(['/home'])
        return;

    }


    mapMovie(movie: IMovie): void {
        /* this.movieService.getMovie(id).subscribe({
             next: movie => this.movie = movie,
             error: err => this.errorMessage = err
         });*/
        this.movie = movie;
        if (this.movie) {
            this.pageTitle = this.movie.Title
        } else {
            this.pageTitle = 'Not found';
        }
    }

    ngOnInit(): void {

        const resolvedMovie: MovieResolved = this.route.snapshot.data['resolvedMovie'];
        this.mapMovie(resolvedMovie.movie);
        this.errorMessage = resolvedMovie.error;

        let header = document.querySelector('.header')
        header.classList.add('display-none')

        if (this.favouritesService.getFavourites() !== null) {
            this.favourites = JSON.parse(sessionStorage.getItem('favourites'))
        } else {
            this.favourites = [];
        }
    }

    ngOnDestroy(): void {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        let header = document.querySelector('.header')
        header.classList.remove('display-none');


    }
}