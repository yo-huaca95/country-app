import { Component, inject, resource, signal } from '@angular/core';
import { SearchInput } from '../../components/search-input/search-input';
import { CountryList } from "../../components/country-list/country-list";
import { CountryService } from '../../services/country.service';

import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-by-capital-page',
  imports: [SearchInput, CountryList],
  templateUrl: './by-capital-page.html',
})
export class ByCapitalPage {

  countryService= inject(CountryService);
  query=signal('');

  countryResources= resource({
    params: () => ({query: this.query()}),
    loader: async({params}) => { // {params,abortSignal,previous} destructuración
      //if(!params.query) return [];
      return await firstValueFrom( //firstValueFrom de rxjs convierte un observable en una promesa
        this.countryService.searByCapital(params.query) //observable a convertir
      )
    },
  })


//   isLoading= signal(false);
//   isError=signal<string|null>(null);
//   countries= signal<Country[]>([]);


// onSearch(query: string) {
//   if(this.isLoading()) return;

//   this.isLoading.set(true);
//   this.isError.set(null);

//   this.countryService.searByCapital(query).subscribe(
//   {
//     next:(countries)=> {
//        this.isLoading.set(false);
//        this.countries.set(countries);
//        console.log(countries);
//     },
//     error:(err) =>{
//       console.log(err);
//       this.isLoading.set(false);
//       this.countries.set([]);
//       this.isError.set(err);
//     },
//   }
  
//   )
// }

}
