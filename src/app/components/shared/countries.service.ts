import { Injectable } from '@angular/core';
import {Country} from './country.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// import {CountryIface} from './country-iface.model';


interface CountriesServerData {
  countries: any[];
}

@Injectable()
export class CountriesService {
  private countryApiUrl: string = 'https://localhost:5001/api/CountriesApi/';
  private country!: Country;


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


  getCountries(subregion: string): Observable<Country[]> {
    // console.log("SR= " +subregion);
    // console.log("R= " +this.region);
    // console.log("C= " +this.country);
    return this.httpClient
    .get<CountriesServerData>('https://localhost:5001/api/CountriesApi?subregion=' + subregion)
    .pipe(map(data => {
      let countries: Country[]= new Array<Country>();
 
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

//   newCountry(country: Country) {
//      let country3 = {"countryName":"Acac","formalName":"ACA","isoAlpha3Code":"ACA","isoNumericCode":8,"countryType":"UN Member State","latestRecordedPopulation":28400000,"continent":"North America","region":"Americas","subregion":"Northern America","lastEditedBy":1}
//      console.log("COUNTRY= " +country);
//      return this.httpClient.post(this.countryApiUrl, country);
//    }
//  }
 


  //-----------1:20 pm 3.13-------------------------------------------------------------------------------------


  newCountry(country: Country) {
   // let country3 = {"countryName":"Acac","formalName":"ACA","isoAlpha3Code":"ACA","isoNumericCode":8,"countryType":"UN Member State","latestRecordedPopulation":28400000,"continent":"North America","region":"Americas","subregion":"Northern America","lastEditedBy":1}
    let strCountry: string = JSON.stringify(country);
    let regex = /"countryId":\d+,/;
    // console.log("REGEX= " +regex);
    strCountry = strCountry.replace(regex, "");
    // console.log("STRCOUNTRY= " +strCountry);
    let jsonCountry = JSON.parse(strCountry);
    console.log("JSONCOUNTRY= " +jsonCountry);
    return this.httpClient.post(this.countryApiUrl, jsonCountry);
  }
}


  // newCountry(country : Country) {
  //   // let country2 = {"countryName":"Aabb","formalName":"ABB",
  //   // "isoAlpha3Code":"ABB","isoNumericCode":5,"countryType":"UN Member State",
  //   // "latestRecordedPopulation":28400000,"continent":"North America","region":"Americas",
  //   // "subregion":"Northern America","lastEditedBy":1}

  //   let regex = /"countryId":\d+,/;

  //   let strCountry: string = JSON.stringify(country);
  //   // let regex = /"countryId"\d+,/;
  //   strCountry = strCountry.replace(regex, "");
  //   let jsonCountry = JSON.parse(strCountry);
  //   console.log("COUNTRY" + country);
  //   console.log("StrCOUNTRY" + strCountry);
  //   console.log("JSON COUNTRY" + jsonCountry);
  //   console.log("JSON COUNTRY STRING" + jsonCountry.toString());
//     return this.httpClient.post(this.countryApiUrl, jsonCountry);
//   }
// }
