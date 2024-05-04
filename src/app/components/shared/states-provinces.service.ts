import { Injectable } from '@angular/core';
import {StateProvince} from './state-province.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface StateProvinceServerData {
  stateProvinces: any[];
}

@Injectable()
export class StatesProvincesService {
  private stateProvince: StateProvince | null = null;
  private stateProvinces: StateProvince[] = [];
  private statesApiUrl: string = 'https://localhost:5001/api/StatesApi/';
  private stateProvinceApiUrl: string = 'https://localhost:5001/api/StateProvincesApi/'; //Ex3C change with API Contoller



  constructor(private httpClient: HttpClient) { }

  getStateProvince(id: number) : Observable<StateProvince> {
    return this.httpClient.get<StateProvince>(this.statesApiUrl + id.toString())
    .pipe(map(data => {
      //Read the result from the JSON response
        this.stateProvince = new StateProvince(
          data["stateProvinceId"],
          data["stateProvinceCode"],
          data["stateProvinceName"],
          data["countryId"],
          data["salesTerritory"],
          data["latestRecordedPopulation"]);

          return this.stateProvince;
  }));
  }

  getStateProvinces(countryId: number) : Observable<StateProvince[]> {
    return this.httpClient
    .get<StateProvinceServerData>(this.stateProvinceApiUrl + countryId.toString())
    .pipe(map(data => {
      //Read the result from the JSON response
      this.stateProvinces = new Array<StateProvince>();
      for (var i in data.stateProvinces) {
        let s = data.stateProvinces[i];
        this.stateProvinces.push( new StateProvince(
          s["stateProvinceId"],
          s["stateProvinceCode"],
          s["stateProvinceName"],
          s["countryId"],
          s["salesTerritory"],
          s["latestRecordedPopulation"]));
      }
      return this.stateProvinces;
    }));
  }


updateStateProvince(stateProvince: StateProvince) {
  console.log("updateStateProvince is being called");
  let strStateProvince = JSON.stringify(stateProvince);
  console.log("strStateProvince: " + strStateProvince);
  let jsonStateProvince = JSON.parse(strStateProvince);
  console.log("jsonStateProvince: " + jsonStateProvince);
  return this.httpClient.put<StateProvince>(this.stateProvinceApiUrl + stateProvince.stateProvinceId.toString(), jsonStateProvince);
}

newStateProvince(stateProvince: StateProvince): Observable<StateProvince> {
  let strStateProvince = JSON.stringify(stateProvince);
  let regex = /"stateProvinceId":\d+,/;
  strStateProvince = strStateProvince.replace(regex, "");
  let jsonStateProvince = JSON.parse(strStateProvince);
  console.log("stateProvince: " + strStateProvince);
  console.log("jsonStateProvince: " + jsonStateProvince);
  return this.httpClient.post<StateProvince>(this.stateProvinceApiUrl, jsonStateProvince)
  .pipe(map(data => {
    //Read the result from the JSON response
      this.stateProvince = new StateProvince(
        data["stateProvinceId"],
        data["stateProvinceCode"],
        data["stateProvinceName"],
        data["countryId"],
        data["salesTerritory"],
        data["latestRecordedPopulation"]);

        return this.stateProvince;
  }));
}

deleteStateProvince(stateProvinceId: number): Observable<StateProvince>{
  return this.httpClient.delete<StateProvince>(this.stateProvinceApiUrl + stateProvinceId.toString())
  .pipe(map(data => {
    //Read the result from the JSON response
      this.stateProvince = new StateProvince(
        data["stateProvinceId"],
        data["stateProvinceCode"],
        data["stateProvinceName"],
        data["countryId"],
        data["salesTerritory"],
        data["latestRecordedPopulation"]);

        return this.stateProvince;
  }));
}


// newStateProvince(stateProvince: StateProvince): Observable<StateProvince> {
//   let strStateProvince = JSON.stringify(stateProvince);
//   let jsonStateProvince = JSON.parse(strStateProvince);
//   return this.httpClient.put<StateProvince>(this.stateProvinceApiUrl + stateProvince.stateProvinceId.toString(), jsonStateProvince);
// }
}

