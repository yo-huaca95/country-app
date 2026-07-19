import { Component, inject, signal } from '@angular/core';
import { CountryList } from "../../components/country-list/country-list";
import { SearchInput } from "../../components/search-input/search-input";
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country-page',
  imports: [CountryList, SearchInput],
  templateUrl: './by-country-page.html',
})
export class ByCountryPage {
  countryService= inject(CountryService);

  isLoading= signal(false);
  isError=signal<string|null>(null);
  countries= signal<Country[]>([]);

}
