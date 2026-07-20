import { Component, inject, resource, signal } from '@angular/core';
import { SearchInput } from "../../components/search-input/search-input";
import { CountryList } from "../../components/country-list/country-list";
import { CountryService } from '../../services/country.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-by-region-page',
  imports: [SearchInput, CountryList],
  templateUrl: './by-region-page.html',
})
export class ByRegionPage {
  countryService= inject(CountryService);
  query=signal('');

   countryResources= resource({
    params: () => ({query: this.query()}),
    loader: async({params}) => { // {params,abortSignal,previous} destructuración
      if(!params.query) return [];
      return await firstValueFrom( //firstValueFrom de rxjs convierte un observable en una promesa
        this.countryService.searByRegion(params.query) //observable a convertir
      )
    }
  })
}
