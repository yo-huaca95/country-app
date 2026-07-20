import { Component, input } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { DecimalPipe } from '@angular/common';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'country-list',
  imports: [DecimalPipe, RouterLink],
  templateUrl: './country-list.html',
  styles: `
    td.emoji {
      font-family: 'Segoe UI Emoji', 'Apple Color Emoji', 'Noto Color Emoji', sans-serif;
      font-size: 1.8rem;
    }
  `,
})
export class CountryList {
  countries = input.required<Country[]>();
}
