
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





//---------------------------------OLDEST----------------------------------

// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { tap } from 'rxjs/operators'; // Add this import statement
// import { map } from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root'
// })
// export class RegionsService {
//   constructor(private http: HttpClient) {}

//   getRegions(): Observable<{ value: string, label: string }[]> {
//     // Make the HTTP request to fetch regions data
//     return this.http.get<string[]>('your_api_endpoint').pipe(
//       map(regions => regions.map(region => ({ value: region, label: region })))
//     );
//   }
  
    
  //   // Make the HTTP request to fetch regions data
  //   return this.http.get<string[]>('https://localhost:5001/api/RegionsApi').pipe(
  //     tap(regions => {
  //       // Log the regions data after it's successfully fetched
  //       console.log('Regions data:', regions);
  //     })
  //   );
  // }
// }


//-----------------------3.13 before copying discussion code//-----------------------------------
// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';

// interface RegionsServerData {
//   regions: any[];
// }

// @Injectable()
// export class RegionsService {
//   private regionsApiUrl: string = 'https://localhost:5001/api/RegionsApi';

//   constructor(private httpClient: HttpClient) { }

//   getRegions(): Observable<string[]> {
//     return this.httpClient
//       .get<RegionsServerData>(this.regionsApiUrl)
//       .pipe(map(data => data.regions));
//   }
// }
