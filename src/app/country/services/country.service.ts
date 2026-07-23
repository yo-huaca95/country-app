import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { RESTCountry } from '../interfaces/rest-countries.interface';
import { catchError, delay, map, Observable, throwError } from 'rxjs';
import { CountryMapper } from '../mapper/country.mapper';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private http= inject(HttpClient);

  searByCapital(query:string):Observable<Country[]>{
    query=query.toLowerCase();
    //console.log(query);
    return this.http.get<RESTCountry>(`${environment.countryUrl}/capitals`
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
      delay(3000),
      catchError(error=>{
          //console.log('error Fetchig', error);
          return throwError(()=>new Error(`No se pudo obtener paises con ese query ${query.length>0? query: 'Vacio'}`))
      })
    )
  }

  searByCountry(query:string):Observable<Country[]>{
    query=query.toLowerCase();
    //console.log(query);
    return this.http.get<RESTCountry>(`${environment.countryUrl}/names.official`
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
      delay(3000),
      catchError(error=>{
          //console.log('error Fetchig', error);
          return throwError(()=>new Error(`No se pudo obtener paises con ese query ${query.length>0? query: 'Vacio'}`))
      })
    )
  }

   searByRegion(query:string):Observable<Country[]>{
    query=query.toLowerCase();
    //console.log(query);
    return this.http.get<RESTCountry>(`${environment.countryUrl}/region`
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
      delay(3000),
      catchError(error=>{
          //console.log('error Fetchig', error);
          return throwError(()=>new Error(`No se pudo obtener paises con ese query ${query.length>0? query: 'Vacio'}`))
      })
    )
  }

  searByAlphaCode(code:string){
    code=code.toLowerCase();
    //console.log(query);
    return this.http.get<RESTCountry>(`${environment.countryUrl}/codes.alpha_3`
     ,{
       params:{
        q:code,
        
       },
       headers:{
        // 'Content-Type': 'application/json',
        'Authorization': `Bearer ${environment.countryApiKey}`
       }
    }
    )
    .pipe(
      map(CountryMapper.mapRestCoutriesObjectsArrayToCountriesArray),
      map(countries => countries.at(0)),
      delay(3000),
      catchError(error=>{
          //console.log('error Fetchig', error);
          return throwError(()=>new Error(`No se pudo obtener paises con ese query ${code.length>0? code: 'Vacio'}`))
      })
    )
  }

}
