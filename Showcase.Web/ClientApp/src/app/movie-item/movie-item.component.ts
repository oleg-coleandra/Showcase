import { Component, Input } from '@angular/core';
import { Movie } from '../shared/movie.service';


@Component({
  selector: 'nga-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent {
  @Input() movie: Movie;
}
