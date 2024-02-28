import { Injectable } from '@angular/core';
import {Country} from './country.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


interface CountriesServerData {
  countries: any[];
}

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

  // getCountries(subregion: string): Observable<CountryIface[]> {
  //   // console.log(subregion);
  //   return this.httpClient.get<CountryIface[]>('https://localhost:5001/api/CountriesApi?subregion=' + subregion);

  // }

  getCountries(subregion: string): Observable<Country[]> {
    // console.log(subregion);
    return this.httpClient
    .get<CountriesServerData>('https://localhost:5001/api/CountriesApi?subregion=' + subregion)
    .pipe(map(data => {
      let countries: Country[]= new Array<Country>();
      // for (var i in data["countries"]) {
      // let c = data["countries"][i];
      //   countries.push(new Country(
      //     c["countryId"],
      //     c["countryName"],
      //     c["formalName"],
      //     c["isoAlpha3Code"],
      //     c["latestRecordedPopulation"],
      //     c["continent"],
      //     c["region"],
      //     c["subregion"]));
      //   }
      for (var i in data.countries) {
        let c = data.countries[i];
          countries.push(new Country(
            c["countryId"],
            c["countryName"],
            c["formalName"],
            c["isoAlpha3Code"],
            c["latestRecordedPopulation"],
            c["continent"],
            c["region"],
            c["subregion"]));
          }
          return countries;
  }));

  }
}
