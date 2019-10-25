import { Component, OnInit } from "@angular/core";
import { FavouritesService } from '../services/favourites.service';
import { UserInputService } from '../services/search.service';
import { IMovie, MovieListResolved } from '../shared/movie.model';
import { MoviesService } from '../services/movies.service';
import { Router, ActivatedRoute, UrlSegment } from '@angular/router';

@Component({
    templateUrl: './favourites.component.html',
    styleUrls: ['./favourites.component.css']
})

export class FavouritMoviesComponent implements OnInit {
    constructor(private favouritesService: FavouritesService,
        private search: UserInputService,
        private movieService: MoviesService,
        private route: ActivatedRoute,
        private router: Router) {
    }

    _filterText: string;

    filteredMovies: IMovie[];

    favourites: string[]; // array for saving favourite movies

    movies: IMovie[]

    pageTitle: string;

    favouritesEmpty: boolean = false;

    returnLink: UrlSegment = this.route.snapshot.url[0];

    handleChanges(target: any): void {
        this.favouritesService.toggleFavourites(target, this.favourites);
        this.filterFavourites();
    }

    filterFavourites() {
        this.filteredMovies = this.movies.filter(movie => {
            return this.favourites.includes(movie.imdbID)
        });
    }

    /*   getMovies(): any {
           this.movieService.getMovies().subscribe(
               response => {
                   this.movies = response;
                   this.filterFavourites();
   
               })
   
       }*/

    more(target: any): void {
        this.router.navigate(['/movies', target.id],
            {
                queryParams: { r: this.returnLink }
            }
        );
    }


    mapMovies(movies: IMovie[], error?: any): void {
        this.movies = movies;
        this.filterFavourites()
        if (this.filteredMovies.length > 0) {
            this.pageTitle = 'Favourites'
        } else {
            this.favouritesEmpty = true;
            this.pageTitle = `No favourite movies found`;
        }
    }


    performFilter(filterBy: string): any {
        filterBy = filterBy.toLocaleLowerCase();
        return this.filteredMovies.filter((movie: any) => {
            return movie.Title
                .toLocaleLowerCase()
                .indexOf(filterBy.trim()) !== -1;
        })
    }


    ngOnInit(): void {

        if (this.favouritesService.getFavourites() !== null) {
            this.favourites = JSON.parse(sessionStorage.getItem('favourites'))
        } else {
            this.favourites = [];
        }

        const resolvedMovies: MovieListResolved = this.route.snapshot.data['resolvedMovies'];
        this.mapMovies(resolvedMovies.movies, resolvedMovies.error);




        let input: Element = document.querySelector('.form-control');
        input.addEventListener('input', () => {
            this._filterText = this.search.searchText;

            if (this._filterText && this._filterText.trim().length > 0) {
                this.filteredMovies = this.performFilter(this._filterText)
            } else {
                this.mapMovies(resolvedMovies.movies, resolvedMovies.error);

            }
            // this.filteredMovies = this._filterText ? this.performFilter(this._filterText) : this.mapMovies(this.movies);
        });
    }

}