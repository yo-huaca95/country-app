import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';

@Component({
  selector: 'app-country-page',
  imports: [],
  templateUrl: './country-page.html',
})
export class CountryPage {
  countryService=inject(CountryService);

  countryCode= inject(ActivatedRoute).snapshot.params['code'];
  
   countryResources= rxResource({
    params: () => ({query: this.countryCode}),
    stream:({params})=>{
      if(!params.query) return of(undefined);
      return  this.countryService.searByAlphaCode(params.query) //observable
    }
  })

}
