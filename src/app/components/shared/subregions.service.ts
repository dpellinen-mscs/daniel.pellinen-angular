import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface SubregionsServerData {
  subregions: any[];
}

@Injectable()
export class SubregionsService {
  private subregionsApiUrl: string = 'https://localhost:5001/api/SubregionsApi';

  constructor(private httpClient: HttpClient) { }

  getSubregions(region: string): Observable<string[]> {
    return this.httpClient
    .get<SubregionsServerData>(this.subregionsApiUrl + '?region='  + region)
    .pipe(map(data => { return <string[]> data.subregions}));
  }
}