import { Component, OnInit } from '@angular/core';
import { MovieService, Movie } from '../shared/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  public movies: Movie[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.loadMovies();
  }

  loadMovies() {
    return this.movieService.getMovies().subscribe((data: Movie[]) => {
      this.movies = data;
    })
  }
}
