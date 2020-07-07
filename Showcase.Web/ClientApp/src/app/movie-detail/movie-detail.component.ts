import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../shared/movie.service';
import { Movie } from '../shared/movie.service';

@Component({
  selector: 'nga-product-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  movie: Movie;

  cardImageObject: Array<object>;
  keyArtImageObject: Array<object>;
  videosObject: Array<object>[];
  errorMessage: string;

  constructor(private route: ActivatedRoute,
    private movieService: MovieService) { };

  ngOnInit() {
    const movieId = this.route.snapshot.params['movieId'];
    this.loadMovie(movieId);
  }

  loadMovie(movieId) {
    return this.movieService.getMovieById(movieId)
      .subscribe(
        result => {
          this.movie = result;
          this.cardImageObject = this.movie.cardImages.map(function (e) {
            return {
              image: e.url,
              thumbImage: e.url,
              title: e.height + 'x' + e.width
            };
          });
          this.keyArtImageObject = this.movie.keyArtImages.map(function (e) {
            return {
              image: e.url,
              thumbImage: e.url,
              title: e.height + 'x' + e.width
            };
          });
          this.videosObject = this.movie.videos.map(function (e) {

            let video = [{
              video: e.url,
              posterImage: e.thumbnailUrl,
              title: e.type + ' - ' + e.title
            }];
            e.alternatives.forEach(p => video.push({
              video: p.url,
              posterImage: e.thumbnailUrl,
              title: e.type + ' - ' + e.title + ' Quality: ' + p.quality
            }));
            return video;
          });
        },
        error => {
          this.errorMessage = error;
        }
      );
  }
}
