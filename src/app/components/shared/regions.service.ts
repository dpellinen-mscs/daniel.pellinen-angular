
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface RegionsServerData {
  regions: any[];
}

@Injectable({
  providedIn: 'root'
})
export class RegionsService {
  private regionsApiUrl: string = 'https://localhost:5001/api/RegionsApi';

  constructor(private httpClient: HttpClient) { }

  getRegions(): Observable<string[]> {
    return this.httpClient.get<RegionsServerData>(this.regionsApiUrl)
      .pipe(map(data =>  {return <string[]> data.regions}));
  }
}

