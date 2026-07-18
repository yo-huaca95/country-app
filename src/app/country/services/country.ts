import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { RESTCountry } from '../interfaces/rest-countries.interface';

@Injectable({
  providedIn: 'root',
})
export class Country {
  private http= inject(HttpClient);

  searByCapital(query:string){
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
  }
}
