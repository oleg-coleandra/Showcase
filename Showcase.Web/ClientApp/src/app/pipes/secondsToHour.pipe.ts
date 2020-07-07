import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'secondsToHour'
})
export class SecondsToHourPipe implements PipeTransform {

  transform(value: number): string {
    const hours: number = Math.floor(value / 3600);
    const minutes: number = Math.floor((value - hours * 3600) / 60);
    return (hours > 0 ? (hours + ' h ') : ('')) + minutes + ' min' ;
  }
}
