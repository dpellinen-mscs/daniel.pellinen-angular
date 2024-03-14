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
  selector: 'app-ex2f-countries',
  templateUrl: './ex2f-countries.component.html',
  styleUrls: ['./ex2f-countries.component.css']
})

export class Ex2fCountriesComponent implements OnInit {
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
    this.regionsService.getRegions().subscribe(data => {
      this.regions = data;
      this.regionSelect.setValue("Americas");

      this.subregionsService.getSubregions(this.regionSelect.value).subscribe(data => {
        this.subregions = data;
        this.subregionSelect.setValue("Northern America");    

      this.countriesService.getCountries(this.subregionSelect.value).subscribe(data => {
        this.countries = data;
        this.lastIndex = this.countries.length -1;
        this.displayCountry();
      });
    });
  });   
}
  
    
    
    

  displayCountry() : void {
    if (this.countries && this.countries.length > 0) {
      this.countryIdInput.setValue(this.countries[this.index].countryId);
    
    this.countryIdInput.setValue(this.countries[this.index].countryId);
    this.countryNameInput.setValue(this.countries[this.index].countryName);
    this.formalNameInput.setValue(this.countries[this.index].formalName);
    this.isoAlpha3CodeInput.setValue(this.countries[this.index].isoAlpha3Code);
    this.latestRecordedPopulationInput.setValue(this.countries[this.index].latestRecordedPopulation);
    this.continentInput.setValue(this.countries[this.index].continent);
    this.regionInput.setValue(this.countries[this.index].region);
    this.subregionInput.setValue(this.countries[this.index].subregion);
} else {
  console.log("COuntryarryempty");}}

  getPreviousButtonClick() : void {
    this.index--;
    this.displayCountry();
    }

    getNextButtonClick() : void {
      this.index++;
        this.displayCountry();
      }

      subregionSelectChange() {
        this.countriesService.getCountries(this.subregionSelect.value).subscribe(data => {
          this.countries = data;
          this.index = 0;
          this.lastIndex = this.countries.length -1;
        this.displayCountry();});
        }
  
        regionSelectChange() {
          this.subregionsService.getSubregions(this.regionSelect.value).subscribe(data => {
            this.defaultSubregion = data[0];
            this.subregions = data;
  
            this.countriesService.getCountries(this.defaultSubregion).subscribe(data => {
              this.countries = data;
              this.lastIndex = this.countries.length -1;
            this.displayCountry();});
          });;
        }
      //-----------1:11 3.14---------------------------------------------------------------------------------------------//
//   regionSelectChange() : void {
//     this.subregionsService.getSubregions(this.regionSelect.value).subscribe(data => {
//       this.subregions = data;
//       this.index = 0;
//       this.subregionSelectChange();
//       this.displayCountry();
//         });
//       }
  
//  subregionSelectChange() : void {
//         this.countriesService.getCountries(this.subregionSelect.value).subscribe(data => {
//           this.countries = data;
//           this.index = 0;
//           this.lastIndex = this.countries.length -1;
//          this.displayCountry();
//         });
//       }

      // regionSelectChange() : void {
      //   this.index = 0;
      //   console.log(this.regionSelect.value);
      //   this.countriesService.getCountries(this.regionSelect.value).subscribe(data => {
      //     this.countries = data;
      //     this.index = 0;
      //     this.lastIndex = this.countries.length -1;
      //     console.log(this.countries);
      //     this.displayCountry();
      //   });
      // }

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


