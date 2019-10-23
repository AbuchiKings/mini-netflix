import { Component, OnInit } from "@angular/core";
import { MovieListService } from '../services/movieList.service';
import { FavouritesService } from '../services/favourites.service';
import { UserInputService } from '../services/message.service';
import { IMovie } from '../shared/movie.model';
import { MoviesService } from '../services/movies.service';

@Component({
    selector: 'mv',
    templateUrl: './movieList.component.html',
    styleUrls: ['./movieList.component.css']
})

export class MovieListComponent implements OnInit {
    constructor(private favouritesService: FavouritesService,
        private message: UserInputService,
        private movieService: MoviesService) {
    }

    errorMsg: any
    _filterText: string;

    filteredMovies: IMovie[];

    favourites: string[]; // array for saving favourite movies

    movies: IMovie[]

    handleChanges(target: any): void {
        this.favouritesService.toggleFavourites(target, this.favourites)
    }


    performFilter(filterBy: string): any {
        filterBy = filterBy.toLocaleLowerCase();
        return this.movies.filter((movie: any) => {
            return movie.Title
                .toLocaleLowerCase()
                .indexOf(filterBy.trim()) !== -1;
        })
    }


    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.movies = this.movieService.getMovies()

        this.filteredMovies = this.movies;


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