import { Injectable } from '@angular/core';
import {StateProvince} from './state-province.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class StatesProvincesService {
  public stateProvince: StateProvince | null = null;
  private stateProvinceApiUrl: string = 'https://localhost:5001/api/StatesApi/';


  constructor(private httpClient: HttpClient) { }

  getStateProvince(id: number) : Observable<StateProvince> {
    return this.httpClient.get<StateProvince>(this.stateProvinceApiUrl + id.toString())
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
}
