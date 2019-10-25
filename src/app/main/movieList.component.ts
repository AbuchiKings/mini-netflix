import { Component, OnInit } from "@angular/core";
import { FavouritesService } from '../services/favourites.service';
import { UserInputService } from '../services/search.service';
import { IMovie, MovieListResolved } from '../shared/movie.model';
import { Router, ActivatedRoute, UrlSegment } from '@angular/router';

@Component({
    selector: 'mv',
    templateUrl: './movieList.component.html',
    styleUrls: ['./movieList.component.css']
})

export class MovieListComponent implements OnInit {
    constructor(private favouritesService: FavouritesService,
        private message: UserInputService,
        private route: ActivatedRoute,
        private router: Router) {
    }

    errorMsg: any
    _filterText: string;

    filteredMovies: IMovie[];

    favourites: string[]; // array for saving favourite movies

    movies: IMovie[]

    pageTitle: string;

    returnLink: UrlSegment = this.route.snapshot.url[0];
    

    handleChanges(target: any): void {
        this.favouritesService.toggleFavourites(target, this.favourites)
    }

    more(target: any): void {
        this.router.navigate(['/movies', target.id],
            {
                queryParams: { r: this.returnLink }
            }
        );
    }

    performFilter(filterBy: string): any {
        filterBy = filterBy.toLocaleLowerCase();
        return this.movies.filter((movie: any) => {
            return movie.Title
                .toLocaleLowerCase()
                .indexOf(filterBy.trim()) !== -1;
        })
    }


    mapMovies(movies: IMovie[], error?: any): void {
        this.movies = movies;
        this.filteredMovies = this.movies;

        if (this.movies) {
            this.pageTitle = 'Popular Movies'
        } else {
            this.pageTitle = `Error: ${error}`;
        }
    }

    ngOnInit(): void {
  
        const resolvedMovies: MovieListResolved = this.route.snapshot.data['resolvedMovies'];
        this.mapMovies(resolvedMovies.movies, resolvedMovies.error);


        let input: Element = document.querySelector('.form-control');
        input.addEventListener('input', () => {
            this._filterText = this.message.searchText;
            this.filteredMovies = this._filterText ? this.performFilter(this._filterText) : this.movies;
        });

        if (this.favouritesService.getFavourites() !== null) {
            this.favourites = JSON.parse(sessionStorage.getItem('favourites'))
        } else {
            this.favourites = [];
        }


    }

}