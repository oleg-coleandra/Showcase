import { Pipe, PipeTransform } from '@angular/core';
import { Person } from '../shared/movie.service';

@Pipe({
  name: 'names'
})
export class NamesPipe implements PipeTransform {

  transform(value: Person[]): string {
    return value.map(p => p.name).join(', ');
  }
}
