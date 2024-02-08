import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DataSource } from '@angular/cdk/collections';
import {Country} from '../shared/country.model'
import {CountriesService} from '../shared/countries.service';

@Component({
  selector: 'app-ex2b-country',
  templateUrl: './ex2b-country.component.html',
  styleUrls: ['./ex2b-country.component.css']
})

export class Ex2bCountryComponent implements OnInit {
  public countryIdInput = new FormControl({value: '', disabled: true});
  public countryNameInput = new FormControl('', [Validators.required]);
  public formalNameInput = new FormControl('', [Validators.required]);
  public isoAlpha3CodeInput = new FormControl('', [Validators.required, Validators.pattern('[A-Z]{3}')]);
  public latestRecordedPopulationInput = new FormControl('', [Validators.required, Validators.min(999.99), Validators.max(999999999.99)]);
  public continentInput = new FormControl('', [Validators.required]);
  public regionInput = new FormControl('', [Validators.required]);
  public subregionInput = new FormControl('', [Validators.required]);

  public country!: Country;

  constructor(private countriesService: CountriesService) { }

  ngOnInit() {
    this.countriesService.getCountry(230).subscribe(data => {
      this.country = data;
      this.displayCountry();
  });
}

    getCanadaButton() : void {
    this.countriesService.getCountry(40).subscribe(data => {
      this.country = data;
      this.displayCountry();
    });
  }

  displayCountry() : void {
    this.countryIdInput.setValue(this.country.countryId);
    this.countryNameInput.setValue(this.country.countryName);
    this.formalNameInput.setValue(this.country.formalName);
    this.isoAlpha3CodeInput.setValue(this.country.isoAlpha3Code);
    this.latestRecordedPopulationInput.setValue(this.country.latestRecordedPopulation);
    this.continentInput.setValue(this.country.continent);
    this.regionInput.setValue(this.country.region);
    this.subregionInput.setValue(this.country.subregion);
  }

  getMexicoButton() : void {
    this.countriesService.getCountry(138).subscribe(data => {
      this.country = data;
      this.displayCountry();
    });
  }

  getUSAButton() : void {
    this.countriesService.getCountry(230).subscribe(data => {
      this.country = data;
      this.displayCountry();
    });
  }
}


