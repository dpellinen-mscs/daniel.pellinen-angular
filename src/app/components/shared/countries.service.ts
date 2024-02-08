import { Injectable } from '@angular/core';
import {Country} from './country.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class CountriesService {
  public country: Country | null = null;
  private countryApiUrl: string = 'https://localhost:5001/api/CountriesApi/';


  constructor(private httpClient: HttpClient) { }

  getCountry(id: number) : Observable<Country> {
    return this.httpClient.get<Country>(this.countryApiUrl + id.toString())
    .pipe(map(data => {
      //Read the result from the JSON response
        this.country = new Country(
          data["countryId"],
          data["countryName"],
          data["formalName"],
          data["isoAlpha3Code"],
          data["latestRecordedPopulation"],
          data["continent"],
          data["region"],
          data["subregion"]);

          return this.country;
  }));
  }
}
