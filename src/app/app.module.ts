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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MovieListComponent,
    MovieDetailsComponent
  ],


  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'home', component: MovieListComponent },
      {path: 'home/movies/:id', canActivate: [MovieDetailsGuard], component: MovieDetailsComponent},
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'home', pathMatch: 'full' },

    ]),
    HttpClientModule,


  ],


  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
