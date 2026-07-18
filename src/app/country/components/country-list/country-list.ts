import { Component, input } from '@angular/core';
import { Object } from '../../interfaces/rest-countries.interface';

@Component({
  selector: 'country-list',
  imports: [],
  templateUrl: './country-list.html',
  styles: `
    td.emoji {
      font-family: 'Segoe UI Emoji', 'Apple Color Emoji', 'Noto Color Emoji', sans-serif;
      font-size: 1.8rem;
    }
  `,
})
export class CountryList {
  countries = input.required<Object[]>();
}
