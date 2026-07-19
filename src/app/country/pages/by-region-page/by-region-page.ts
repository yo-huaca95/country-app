import { Component, inject, signal } from '@angular/core';
import { SearchInput } from "../../components/search-input/search-input";
import { CountryList } from "../../components/country-list/country-list";
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-region-page',
  imports: [SearchInput, CountryList],
  templateUrl: './by-region-page.html',
})
export class ByRegionPage {
  countryService= inject(CountryService);

  isLoading= signal(false);
  isError=signal<string|null>(null);
  countries= signal<Country[]>([]);
}
