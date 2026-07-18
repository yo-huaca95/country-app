import { Component, inject, signal } from '@angular/core';
import { SearchInput } from '../../components/search-input/search-input';
import { CountryList } from "../../components/country-list/country-list";
import { Country } from '../../services/country';

import { Object } from '../../interfaces/rest-countries.interface';

@Component({
  selector: 'app-by-capital-page',
  imports: [SearchInput, CountryList],
  templateUrl: './by-capital-page.html',
})
export class ByCapitalPage {

  countryService= inject(Country);

  isLoading= signal(false);
  isError=signal<string|null>(null);
  countries= signal<Object[]>([]);


onSearch(query: string) {
  if(this.isLoading()) return;

  this.isLoading.set(true);
  this.isError.set(null);

  this.countryService.searByCapital(query).subscribe(REScountry=>{
  this.isLoading.set(false);
  this.countries.set(REScountry.data.objects);
  console.log(REScountry.data.objects);
 })
}

}
