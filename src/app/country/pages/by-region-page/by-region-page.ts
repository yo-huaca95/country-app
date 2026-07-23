import { Component, inject, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';

import { SearchInput } from "../../components/search-input/search-input";
import { CountryList } from "../../components/country-list/country-list";
import { CountryService } from '../../services/country.service';

import { of } from 'rxjs';


@Component({
  selector: 'app-by-region-page',
  imports: [SearchInput, CountryList],
  templateUrl: './by-region-page.html',
})
export class ByRegionPage {
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
  //       this.countryService.searByRegion(params.query) //observable a convertir
  //     )
  //   }
  // })
}
