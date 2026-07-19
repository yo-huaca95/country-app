import { Component, inject, signal } from '@angular/core';
import { SearchInput } from '../../components/search-input/search-input';
import { CountryList } from "../../components/country-list/country-list";
import { CountryService } from '../../services/country.service';

import { Object } from '../../interfaces/rest-countries.interface';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-capital-page',
  imports: [SearchInput, CountryList],
  templateUrl: './by-capital-page.html',
})
export class ByCapitalPage {

  countryService= inject(CountryService);

  isLoading= signal(false);
  isError=signal<string|null>(null);
  countries= signal<Country[]>([]);


onSearch(query: string) {
  if(this.isLoading()) return;

  this.isLoading.set(true);
  this.isError.set(null);

  this.countryService.searByCapital(query).subscribe(
  {
    next:(countries)=> {
       this.isLoading.set(false);
       this.countries.set(countries);
       console.log(countries);
    },
    error:(err) =>{
      this.isLoading.set(false);
      this.countries.set([]);
      this.isError.set(`No se encontró un país con esa capital: ${query.length>0? query: 'Parametro de busqueda vacio'}`);
      console.log(`No se encontró un país con esa capital: ${query}`);
    },
  }
  
  )
}

}
