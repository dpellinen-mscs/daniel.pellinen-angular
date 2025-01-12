import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
//import { MatSelectModule } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DataSource } from '@angular/cdk/collections';
import {Country} from '../shared/country.model'
import {CountriesService} from '../shared/countries.service';
import {SubregionsService} from '../shared/subregions.service';
import { RegionsService } from '../shared/regions.service';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
// import {RegionsService} from '../shared/regions.service';

@Component({
  selector: 'app-ex2e-countries',
  templateUrl: './ex2e-countries.component.html',
  styleUrls: ['./ex2e-countries.component.css']
})

export class Ex2eCountriesComponent implements OnInit {
  public regionSelect = new FormControl();
  public subregionSelect = new FormControl();
  public countryIdInput = new FormControl({value: '', disabled: true});
  public countryNameInput = new FormControl('', [Validators.required]);
  public formalNameInput = new FormControl('', [Validators.required]);
  public isoAlpha3CodeInput = new FormControl('', [Validators.required, Validators.pattern('[A-Z]{3}')]);
  public latestRecordedPopulationInput = new FormControl('', [Validators.required, Validators.min(999.99), Validators.max(999999999.99)]);
  public continentInput = new FormControl('', [Validators.required]);
  public regionInput = new FormControl('', [Validators.required]);
  public subregionInput = new FormControl('', [Validators.required]);

  public countries!: Country[]; 
  public index: number = 0;
  public lastIndex: number = 1;

  public subregions!: string[];
  public defaultSubregion: string = 'Northern America';

  public regions!: string[];
  public defaultRegion: string = 'Americas';

  constructor(private countriesService: CountriesService,
    private subregionsService: SubregionsService, private regionsService: RegionsService) { }



  ngOnInit() {
    this.subregionsService.getSubregions("Americas").subscribe(data => {
      this.subregions = data;
      this.subregionSelect.setValue("Northern America")

      this.countriesService.getCountries(this.subregionSelect.value).subscribe(data => {
        this.countries = data;
        this.lastIndex = this.countries.length -1;
        this.displayCountry();
      });
    });   
  }
    



    // ngOnInit() {
    //   this.getSubregionsAndRegions();
    // }
    
    // getSubregionsAndRegions() {
    //   this.subregionsService.getSubregions("Americas").subscribe(subregions => { 
    //     this.subregions = subregions;
    //     this.subregionSelect.setValue(this.subregions[0]); // Assuming you want to preselect the first subregion
    
    //     // Fetch countries based on the selected subregion
    //     this.getCountriesAndDisplayCountry(this.subregionSelect.value);
    //   });
    
    //   this.regionsService.getRegions().subscribe(regions => {
    //     this.regions = regions;
    //     this.regionSelect.setValue(this.regions[0]); // Assuming you want to preselect the first region
    //   });
    // }
    
    // getCountriesAndDisplayCountry(subregion: string) {
    //   this.countriesService.getCountries(subregion).subscribe(countries => {
    //     this.countries = countries;
    //     this.lastIndex = this.countries.length - 1;
    //     this.displayCountry();
    //   });
    // }
    
    

  displayCountry() : void {
    
    this.countryIdInput.setValue(this.countries[this.index].countryId);
    this.countryNameInput.setValue(this.countries[this.index].countryName);
    this.formalNameInput.setValue(this.countries[this.index].formalName);
    this.isoAlpha3CodeInput.setValue(this.countries[this.index].isoAlpha3Code);
    this.latestRecordedPopulationInput.setValue(this.countries[this.index].latestRecordedPopulation);
    this.continentInput.setValue(this.countries[this.index].continent);
    this.regionInput.setValue(this.countries[this.index].region);
    this.subregionInput.setValue(this.countries[this.index].subregion);
  }

  getPreviousButtonClick() : void {
    this.index--;
    this.displayCountry();
    }

    getNextButtonClick() : void {
      this.index++;
        this.displayCountry();
      }
  
 subregionSelectChange() : void {
        this.index = 0;
        console.log(this.subregionSelect.value);
        console.log(this.regionSelect.value);
        this.countriesService.getCountries(this.subregionSelect.value).subscribe(data => {
          this.countries = data;
          this.index = 0;
          this.lastIndex = this.countries.length -1;
          console.log(this.countries);
          this.displayCountry();
        });
      }

      regionSelectChange() : void {
        this.index = 0;
        console.log(this.regionSelect.value);
        this.countriesService.getCountries(this.regionSelect.value).subscribe(data => {
          this.countries = data;
          this.index = 0;
          this.lastIndex = this.countries.length -1;
          console.log(this.countries);
          this.displayCountry();
        });
      }

  getNorthernAmericaButton() : void {
    this.countriesService.getCountries('Northern%20America').subscribe(data => {
      this.countries = data;
      this.index = 0;
      this.lastIndex = this.countries.length -1;
      this.displayCountry();
    });
  }

  getSouthAmericaButton() : void {
    this.countriesService.getCountries('South%20America').subscribe(data => {
      this.countries = data;
      this.index = 0;
      this.lastIndex = this.countries.length -1;
      this.displayCountry();
    });
  }
  

  getCaribbeanButton() : void {
    this.countriesService.getCountries('Caribbean').subscribe(data => {
      this.countries = data;
      this.index = 0;
      this.lastIndex = this.countries.length -1;
      this.displayCountry();
    });
  }
}


