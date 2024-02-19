import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DataSource } from '@angular/cdk/collections';
import {Country} from '../shared/country.model'
import {CountriesService} from '../shared/countries.service';

@Component({
  selector: 'app-ex2d-countries',
  templateUrl: './ex2d-countries.component.html',
  styleUrls: ['./ex2d-countries.component.css']
})

export class Ex2dCountriesComponent implements OnInit {
  public countryIdInput = new FormControl({value: '', disabled: true});
  public countryNameInput = new FormControl('', [Validators.required]);
  public formalNameInput = new FormControl('', [Validators.required]);
  public isoAlpha3CodeInput = new FormControl('', [Validators.required, Validators.pattern('[A-Z]{3}')]);
  public latestRecordedPopulationInput = new FormControl('', [Validators.required, Validators.min(999.99), Validators.max(999999999.99)]);
  public continentInput = new FormControl('', [Validators.required]);
  public regionInput = new FormControl('', [Validators.required]);
  public subregionInput = new FormControl('', [Validators.required]);

  //public country!: Country;
  // public countries = [
  //   {"countryId":40,"countryName":"Canada","formalName":"Canada","isoAlpha3Code":"CAN","isoNumericCode":124,"countryType":"UN Member State","latestRecordedPopulation":34826696,"continent":"North America","region":"Americas","subregion":"Northern America"},
  //   {"countryId":230,"countryName":"United States","formalName":"United States of America","isoAlpha3Code":"USA","isoNumericCode":840,"countryType":"UN Member State","latestRecordedPopulation":313973000,"continent":"North America","region":"Americas","subregion":"Northern America"},
  //   {"countryId":243,"countryName":"Aaaaa1","formalName":"Aaaaa1","isoAlpha3Code":"AAA","isoNumericCode":999,"countryType":"UN Member State","latestRecordedPopulation":1000,"continent":"North America","region":"Americas","subregion":"Northern America"}
  // ];
 // public countries: any[] = [];
//  public countries: CountryIface[] = []; 
  public countries: Country[] = []; 
  public index: number = 0;
  public lastIndex: number = 1;


  constructor(private countriesService: CountriesService) { }

  ngOnInit() {
    // this.countriesService.getCountry(230).subscribe(data => {
    //   this.country = data;
      //  this.displayCountry();
       this.countriesService.getCountries("Carribean").subscribe(data => { 
        this.countries = data ;
       this.lastIndex = this.countries.length -1;})

  // });
}

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


