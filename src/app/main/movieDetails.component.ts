import { Component, OnInit, OnDestroy } from "@angular/core";
import { IMovie } from '../shared/movie.model';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../services/movies.service';


@Component({
    templateUrl: './movieDetails.component.html',
    styleUrls: ['./movieDetails.component.css']
})
export class MovieDetailsComponent implements OnInit, OnDestroy {
   
   movie: IMovie;
    constructor(private route: ActivatedRoute, private router: Router,
        private movieService: MoviesService) {

    }


    back():void{
        this.router.navigate(['/home'])
    }

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        let id: string = this.route.snapshot.params['id'];
        this.movie = this.movieService.getMovie(id);
        console.log(this.movie)

        let header = document.querySelector('.header')
        header.classList.add('display-none')
    }

    ngOnDestroy(): void {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        let header = document.querySelector('.header')
        header.classList.remove('display-none')
    }
}