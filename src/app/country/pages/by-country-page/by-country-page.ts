import { Component, inject, resource, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';

import { CountryList } from "../../components/country-list/country-list";
import { SearchInput } from "../../components/search-input/search-input";
import { CountryService } from '../../services/country.service';

import { of } from 'rxjs';

@Component({
  selector: 'app-by-country-page',
  imports: [CountryList, SearchInput],
  templateUrl: './by-country-page.html',
})
export class ByCountryPage {

  countryService= inject(CountryService);
  query=signal('');

  countryResources= rxResource({
    params: () => ({query: this.query()}),
    stream:({params})=>{
      if(!params.query) return of([]);
      return  this.countryService.searByCountry(params.query) //observable
    }
  })

  //  countryResources= resource({
  //   params: () => ({query: this.query()}),
  //   loader: async({params}) => { // {params,abortSignal,previous} destructuración
  //     if(!params.query) return [];
  //     return await firstValueFrom( //firstValueFrom de rxjs convierte un observable en una promesa
  //       this.countryService.searByCountry(params.query) //observable a convertir
  //     )
  //   }
  // })

}
