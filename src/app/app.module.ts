import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';




import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MovieListComponent } from './main/movieList.component';
import { MovieDetailsComponent } from './main/movieDetails.component';
import { MovieDetailsGuard } from './services/movie-details.guard';
import { FavouritMoviesComponent } from './main/favourites.component';
import { UserInputService } from './services/search.service';
import { MovieResolver } from './services/movie-resolver.service';
import { MovieListResolver } from './services/movieList-resolver.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MovieListComponent,
    MovieDetailsComponent,
    FavouritMoviesComponent
  ],


  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'home', component: MovieListComponent,
        resolve: { resolvedMovies: MovieListResolver }
      },

      {
        path: 'favourites', component: FavouritMoviesComponent,
        resolve: { resolvedMovies: MovieListResolver }
      },

      {
        path: 'movies/:id', canActivate: [MovieDetailsGuard], component: MovieDetailsComponent,
        resolve: { resolvedMovie: MovieResolver }
      },

      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'home', pathMatch: 'full' },

    ]),
    HttpClientModule,


  ],


  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
