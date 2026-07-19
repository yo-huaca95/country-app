import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { RESTCountry } from '../interfaces/rest-countries.interface';
import { catchError, map, Observable, throwError } from 'rxjs';
import { CountryMapper } from '../mapper/country.mapper';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private http= inject(HttpClient);

  searByCapital(query:string):Observable<Country[]>{
    query=query.toLowerCase();
    return this.http.get<RESTCountry>(`${environment.countryUrl}`
     ,{
       params:{
        q:query,
        
       },
       headers:{
        // 'Content-Type': 'application/json',
        'Authorization': `Bearer ${environment.countryApiKey}`
       }
    }
    )
    .pipe(
      map(CountryMapper.mapRestCoutriesObjectsArrayToCountriesArray),
      catchError(error=>{
          console.log('error Fetchig', error);
          return throwError(()=>new Error(`No se pudo obtener paises con ese query ${query.length>0? query: 'Vacio'}`))
      })
    )
  }
}
