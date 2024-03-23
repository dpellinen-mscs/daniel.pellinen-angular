import { Injectable } from '@angular/core';
import {Country} from './country.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Subject} from 'rxjs';
import { ChangeDetectorRef } from '@angular/core';


interface CountriesServerData {
  countries: any[];
}

@Injectable()
export class CountriesService {
  private countryApiUrl: string = 'https://localhost:5001/api/CountriesApi/';
  private country!: Country;
  private countries: Country[] = new Array<Country>();   //ex3b
  public sampSubject = new Subject();
  public countriesSubject = new Subject<Country>();
  private cd!: ChangeDetectorRef;


  constructor(private httpClient: HttpClient) {
    console.log("CountriesService constructor");
   }

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



  getCountryCopy(id: number) : Country {  
    let i: number = 0;
    let c!: Country;
    for (; i < this.countries.length; i++) {
      if (this.countries[i].countryId == id) {
        break;
      }
    }
    if (i < this.countries.length) {  
      c = new Country(
        this.countries[i].countryId,
        this.countries[i].countryName,
        this.countries[i].formalName,
        this.countries[i].isoAlpha3Code,
        this.countries[i].latestRecordedPopulation,
        this.countries[i].continent,
        this.countries[i].region,
        this.countries[i].subregion);
      } else {
        // If no matching country was found, create a default one
        c = new Country(0, "", "", "", 0, "", "", "");
      }
      
      return c;
    }


  getCountries(subregion: string): Observable<Country[]> {
    return this.httpClient
    .get<CountriesServerData>('https://localhost:5001/api/CountriesApi?subregion=' + subregion)
    .pipe(map(data => {
      // let countries: Country[]= new Array<Country>();
        this.countries = new Array<Country>();  //ex3b
      for (var i in data.countries) {
        let c = data.countries[i];
          // countries.push(new Country(
         this.countries.push(new Country(     //ex3b
            c["countryId"],
            c["countryName"],
            c["formalName"],
            c["isoAlpha3Code"],
            c["latestRecordedPopulation"],
            c["continent"],
            c["region"],
            c["subregion"]));
          }
          // return countries;
          return this.countries;    //ex3b
  }));
  }



  newCountry(country: Country): Observable<Country> {
    let strCountry: string = JSON.stringify(country);
    let regex = /"countryId":\d+,/;
    // console.log("REGEX= " +regex);
    strCountry = strCountry.replace(regex, "");
    // console.log("STRCOUNTRY= " +strCountry);
    let jsonCountry = JSON.parse(strCountry);
    console.log("JSONCOUNTRY= " +jsonCountry);
    return this.httpClient.post<Country>(this.countryApiUrl, jsonCountry)
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

  deleteCountry(countryId: number): Observable<Country> {
    return this.httpClient.delete<Country>(this.countryApiUrl + countryId.toString())
    .pipe(map(data => {
      //Read the result from the JSON response
        return new Country(
          data["countryId"],
          data["countryName"],
          data["formalName"],
          data["isoAlpha3Code"],
          data["latestRecordedPopulation"],
          data["continent"],
          data["region"],
          data["subregion"]);   
    }));
  }

  updateCountry(country: Country) {
    let strCountry: string = JSON.stringify(country);
    let jsonCountry = JSON.parse(strCountry);
    console.log('Sending update request for country:', country);

    return this.httpClient.put<Country>(this.countryApiUrl +country.countryId.toString() , jsonCountry);
  }
}

