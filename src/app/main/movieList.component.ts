import { Component } from "@angular/core";
import { MovieListService } from '../services/movieList.service';

@Component({
    selector: 'mv',
    templateUrl: './movieList.component.html',
    styleUrls: ['./movieList.component.css']
})

export class MovieListComponent {
    constructor(movieService: MovieListService) {

    }

    movies: any[] = [
        {
            "Title": "The Purge: Election Year",
            "Year": "2016",
            "Rated": "R",
            "Released": "01 Jul 2016",
            "Runtime": "108 min",
            "Genre": "Action, Horror, Sci-Fi, Thriller",
            "Director": "James DeMonaco",
            "Writer": "James DeMonaco",
            "Actors": "Frank Grillo, Elizabeth Mitchell, Mykelti Williamson, Joseph Julian Soria",
            "Plot": "It's been seventeen years since Leo Barnes (Frank Grillo) stopped himself from a regrettable act of revenge on Purge Night. Now serving as head of security for Senator Charlie Roan (Elizabeth Mitchell), his mission is to protect her in a run for president and survive the annual ritual that targets the poor and innocent. But when a betrayal forces them onto the streets of D.C. on the one night when no help is available, they must stay alive until dawn...or both be sacrificed for their sins against the state.",
            "Language": "English, Russian, Afrikaans",
            "Country": "USA, Japan",
            "Awards": "6 nominations.",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNzk2OTQ1OV5BMl5BanBnXkFtZTgwMTI2NjU5ODE@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "6.0/10"
                },
                {
                    "Source": "Rotten Tomatoes",
                    "Value": "55%"
                },
                {
                    "Source": "Metacritic",
                    "Value": "55/100"
                }
            ],
            "Metascore": "55",
            "imdbRating": "6.0",
            "imdbVotes": "82,120",
            "imdbID": "tt4094724",
            "Type": "movie",
            "DVD": "04 Oct 2016",
            "BoxOffice": "N/A",
            "Production": "Universal Pictures",
            "Website": "N/A",
            "Response": "True"
        },
        {
            "Title": "Avengers: Endgame",
            "Year": "2019",
            "Rated": "PG-13",
            "Released": "26 Apr 2019",
            "Runtime": "181 min",
            "Genre": "Action, Adventure, Sci-Fi",
            "Director": "Anthony Russo, Joe Russo",
            "Writer": "Christopher Markus (screenplay by), Stephen McFeely (screenplay by), Stan Lee (based on the Marvel comics by), Jack Kirby (based on the Marvel comics by), Jim Starlin (Thanos,  Gamora & Drax created by), Jack Kirby (Groot created by)",
            "Actors": "Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth",
            "Plot": "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
            "Language": "English, Japanese, Xhosa",
            "Country": "USA, UK, Canada",
            "Awards": "N/A",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "8.6/10"
                },
                {
                    "Source": "Rotten Tomatoes",
                    "Value": "94%"
                },
                {
                    "Source": "Metacritic",
                    "Value": "78/100"
                }
            ],
            "Metascore": "78",
            "imdbRating": "8.6",
            "imdbVotes": "561,813",
            "imdbID": "tt4154796",
            "Type": "movie",
            "DVD": "30 Jul 2019",
            "BoxOffice": "N/A",
            "Production": "Marvel Studios",
            "Website": "N/A",
            "Response": "True"
        },
        {
            "Title": "Dark Phoenix",
            "Year": "2019",
            "Rated": "PG-13",
            "Released": "07 Jun 2019",
            "Runtime": "113 min",
            "Genre": "Action, Adventure, Sci-Fi",
            "Director": "Simon Kinberg",
            "Writer": "Simon Kinberg, Stan Lee (comic book created by), Jack Kirby (comic book created by), Chris Claremont (story \"The Dark Phoenix Saga\"), John Byrne (story \"The Dark Phoenix Saga\"), Dave Cockrum (story \"The Dark Phoenix Saga\")",
            "Actors": "James McAvoy, Michael Fassbender, Jennifer Lawrence, Nicholas Hoult",
            "Plot": "Jean Grey begins to develop incredible powers that corrupt and turn her into a Dark Phoenix. Now the X-Men will have to decide if the life of a team member is worth more than all of humanity.",
            "Language": "English, French",
            "Country": "USA, Canada",
            "Awards": "N/A",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjAwNDgxNTI0M15BMl5BanBnXkFtZTgwNTY4MDI1NzM@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "5.8/10"
                },
                {
                    "Source": "Rotten Tomatoes",
                    "Value": "23%"
                },
                {
                    "Source": "Metacritic",
                    "Value": "43/100"
                }
            ],
            "Metascore": "43",
            "imdbRating": "5.8",
            "imdbVotes": "94,363",
            "imdbID": "tt6565702",
            "Type": "movie",
            "DVD": "03 Sep 2019",
            "BoxOffice": "N/A",
            "Production": "20th Century Fox",
            "Website": "N/A",
            "Response": "True"
        }    
    ]
}