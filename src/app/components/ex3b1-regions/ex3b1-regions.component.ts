import { Component, OnInit, OnDestroy } from '@angular/core';
import { RegionsService } from '../shared/regions.service';
import { SubregionsService } from '../shared/subregions.service';
import {ActivatedRoute} from '@angular/router'
import { Subscription } from 'rxjs';
import {Country} from '../shared/country.model'
import {CountriesService} from '../shared/countries.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-ex3b-regions',
  templateUrl: './ex3b1-regions.component.html',
  styleUrls: ['./ex3b1-regions.component.css']
})
export class Ex3b1RegionsComponent implements OnInit {
  public regions!: string[];
  public selectedRegion: string = 'Americas';
  public subregions!: string[];
  public selectedSubregion: string = 'Northern America';
  private parmSubscrip!: Subscription;
  private cd!: ChangeDetectorRef;
  public countries!: Country[];
  private countrySubscription!: Subscription;

  constructor(private regionsService: RegionsService,
     private subregionsService: SubregionsService,
     private countriesService: CountriesService,
     private route: ActivatedRoute) { console.log("Constructor");}

  ngOnInit(): void {
    this.regionsService.getRegions().subscribe(data => {
      this.regions = data;
    });

    this.parmSubscrip = this.route.params.subscribe(params => {
      this.selectedRegion = params['region'];
      if(!this.selectedRegion) this.selectedRegion = 'Americas';
      this.selectedSubregion = params['subregion'];

        this.subregionsService.getSubregions(this.selectedRegion).subscribe(data => {
          this.subregions = data;
          if (!this.selectedSubregion) this.selectedSubregion = this.subregions[0];

          this.countriesService.getCountries(this.selectedSubregion).subscribe(data => {
            this.countries = data;
            // this.cd.detectChanges(); 
          });
      });
    });

    this.countrySubscription = this.countriesService.countriesSubject.subscribe( c=> {
      console.log(c);
      let i: number = 0;
      for (; i < this.countries.length; i++) {
        if (this.countries[i].countryId == c.countryId) {
          break;
        }
      }
      console.log(this.countries[i]);
      if (c.countryName == 'Deleted') {
        this.countries.splice(i, 1);
        console.log(this.countries);
      }
      else
      this.countries[i] = c;
    }); 
  }

  ngOnDestroy() {
    this.parmSubscrip.unsubscribe();
    this.countrySubscription.unsubscribe();
  }
}
