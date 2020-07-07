import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class MovieService {
  public movies: Movie[];
  public movie: Movie;
  baseUrl: string;
  http: HttpClient;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.baseUrl = baseUrl;
    this.http = http;
  }

  ngOnInit(): void {
  }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.baseUrl + 'showcase')
      .pipe(
        retry(1),
        catchError(this.handleError));
  }

  getMovieById(movieId: string): Observable<Movie> {
    return this.http.get<Movie>(this.baseUrl + 'showcase/getMovieById/' + movieId)
      .pipe(
        retry(1),
        catchError(this.handleError));
  }

  handleError(error) {
    return throwError("There is an error processing your request!");
  }
}

export class Movie {
  public id: string;
  public headline: string;
  public genres: string[];
  public duration: number;
  public synopsis: string;
  public rating: number;
  public cardImages: Image[];
  public keyArtImages: Image[];
  public videos: Video[];
}

export class Video {
  public url: string;
  public title: string;
  public thumbnailUrl: string;
  public alternatives: AlternativeVieo[];
  public type: string
}

export class AlternativeVieo {
  public url: string;
  public quality: number;
}

export class Image {
  public url: string;
  public height: number;
  public width: number;
}

export class Person {
  public name: string;
}
