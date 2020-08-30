import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DateService {
  getAll() {
    return [
      { year: 2017, months: 1 },
      { year: 2017, months: 2 },
      { year: 2017, months: 3 },
    ];
  }
}
