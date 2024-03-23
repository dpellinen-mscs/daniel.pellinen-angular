import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
//import { MatSelectModule } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DataSource } from '@angular/cdk/collections';
import {Country} from '../shared/country.model'
import {CountriesService} from '../shared/countries.service';
import {SubregionsService} from '../shared/subregions.service';
import { RegionsService } from '../shared/regions.service';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { discardPeriodicTasks } from '@angular/core/testing';
import { ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
// import {RegionsService} from '../shared/regions.service';

@Component({
  selector: 'app-ex3b-countries',
  templateUrl: './ex3b2-countries.component.html',
  styleUrls: ['./ex3b2-countries.component.css']
})
export class Ex3b2CountriesComponent implements OnInit {

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


  public creatingNew: boolean = false;

  // public countries: Country[] = []; 
  public country!: Country;


  public subregions!: string[];
  public defaultSubregion: string = 'Northern America';

  public regions!: string[];
  public defaultRegion: string = 'Americas';

  private cd!: ChangeDetectorRef;
  private parmSubscrip!: Subscription;  //subscription variable used in OnDestroy for unsubscribing

  constructor(private countriesService: CountriesService,
    private subregionsService: SubregionsService,
     private regionsService: RegionsService
     , private snackBar: MatSnackBar,
     private route: ActivatedRoute,) { }
    


    ngOnInit() {
      //Get Parameter
      this.parmSubscrip = this.route.params.subscribe(params => {
        let selectedCountryId = Number.parseInt(params['countryId']);
        this.country = this.countriesService.getCountryCopy(selectedCountryId);
        this.displayCountry();
      });
  }

  displayCountry() : void {
    if (this.country) {
    this.countryIdInput.setValue(this.country.countryId);
    this.countryNameInput.setValue(this.country.countryName);
    this.formalNameInput.setValue(this.country.formalName);
    this.isoAlpha3CodeInput.setValue(this.country.isoAlpha3Code);
    this.latestRecordedPopulationInput.setValue(this.country.latestRecordedPopulation);
  }
  }
  
  updateCountryFromForm() : void {
    this.country.countryId = parseInt(this.countryIdInput.value);
    this.country.countryName = (this.countryNameInput.value);
    this.country.formalName = (this.formalNameInput.value);
    this.country.isoAlpha3Code = (this.isoAlpha3CodeInput.value);
    this.country.latestRecordedPopulation = parseInt(this.latestRecordedPopulationInput.value);
  }


  getNorthernAmericaButton() : void {
    // this.countriesService.getCountries('Northern%20America').subscribe(data => {
    //   this.countries = data;
    //   this.index = 0;
    //   this.lastIndex = this.countries.length -1;
    //   this.displayCountry();
    // });
  }

  getSouthAmericaButton() : void {
    // this.countriesService.getCountries('South%20America').subscribe(data => {
    //   this.countries = data;
    //   this.index = 0;
    //   this.lastIndex = this.countries.length -1;
    //   this.displayCountry();
    // });
  }
  

  getCaribbeanButton() : void {
    // this.countriesService.getCountries('Caribbean').subscribe(data => {
    //   this.countries = data;
    //   this.index = 0;
    //   this.lastIndex = this.countries.length -1;
    //   this.displayCountry();
    // });
  }

  createNewButtonClick() {
    let c: Country = this.country;
    this.country = new Country(0, "", "", "", 0, c.continent, c.region, c.subregion);
    //he had these following two lines flipped
    this.creatingNew = true;
    this.displayCountry();
  }

  saveButtonClick() {
    if (this.creatingNew) {

//       console.log('Country ID:', this.countryIdInput.value);
// console.log('Country Name:', this.countryNameInput.value);
// console.log('Formal Name:', this.formalNameInput.value);
// console.log('ISO Alpha-3 Code:', this.isoAlpha3CodeInput.value);
// console.log('Latest Recorded Population:', this.latestRecordedPopulationInput.value);

    this.updateCountryFromForm();
    console.log('Updated country model:', this.country);

    this.countriesService.newCountry(this.country).subscribe(
      response => {
      console.log(response);
      this.country = response;
      this.displayCountry();
      this.creatingNew = false;
      this.countriesService.countriesSubject.next(this.country);
      this.snackBar.open(this.country.countryName, "Saved", {
        duration: 2000,
      });},
        error => console.log(error)
    );
  }
  else{
    this.updateCountryFromForm();
    console.log(this.country);
    this.countriesService.updateCountry(this.country).subscribe(
      response => {
         console.log(response);
         this.countriesService.countriesSubject.next(this.country);
        this.snackBar.open(this.country.countryName, "saved", { duration: 2000, });
      },
      error => console.log(error)
    );
  }
}

  cancelButtonClick() {
    this.creatingNew = false;
    this.country = new Country(99999, "CANT ASSIGN COUNTRY TO NULL. COULDNT FIND A WAY TO HIDE BECAUSE SETTING NGIF TO countryId != 0 INHIBITS OTHER FUNCTIONING", "I did use countryId to hide the buttons below", "HUH", 0, "", "", "");
    this.displayCountry();
  }


  deleteButtonClick() {
    this.countriesService.deleteCountry(this.country.countryId).subscribe(
      response => {
        this.country = new Country(99999, "CANT ASSIGN COUNTRY TO NULL. COULDNT FIND A WAY TO HIDE BECAUSE SETTING NGIF TO countryId != 0 INHIBITS OTHER FUNCTIONING", "I did use countryId to hide the buttons below", "HUH", 0, "", "", "");
        this.snackBar.open(response.countryName, "Deleted", { duration: 2000, });
        response.countryName = "Deleted";
        this.countriesService.countriesSubject.next(response);
      },
        error => console.log(error)
    );
  }

  ngOnDestroy() {
    this.parmSubscrip.unsubscribe();
  }
}
