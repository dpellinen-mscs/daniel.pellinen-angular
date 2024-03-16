import { Component, OnInit, ViewEncapsulation } from '@angular/core';
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
// import {RegionsService} from '../shared/regions.service';

@Component({
  selector: 'app-ex3a-countries',
  templateUrl: './ex3a-countries.component.html',
  styleUrls: ['./ex3a-countries.component.css']
})

export class Ex3aCountriesComponent implements OnInit {
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

  public countries: Country[] = []; 
  public index: number = 0;
  public lastIndex: number = 1;


  public subregions!: string[];
  public defaultSubregion: string = 'Northern America';

  public regions!: string[];
  public defaultRegion: string = 'Americas';

  constructor(private countriesService: CountriesService,
    private subregionsService: SubregionsService,
     private regionsService: RegionsService
     , private snackBar: MatSnackBar) { }
    


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
    
    this.countryIdInput.setValue(this.countries[this.index].countryId);
    this.countryNameInput.setValue(this.countries[this.index].countryName);
    this.formalNameInput.setValue(this.countries[this.index].formalName);
    this.isoAlpha3CodeInput.setValue(this.countries[this.index].isoAlpha3Code);
    this.latestRecordedPopulationInput.setValue(this.countries[this.index].latestRecordedPopulation);
    this.continentInput.setValue(this.countries[this.index].continent);
    this.regionInput.setValue(this.countries[this.index].region);
    this.subregionInput.setValue(this.countries[this.index].subregion);
  }

  
  updateCountryFromForm() : void {
    this.countries[this.index].countryId = parseInt(this.countryIdInput.value);
    this.countries[this.index].countryName = (this.countryNameInput.value);
    this.countries[this.index].formalName = (this.formalNameInput.value);
    this.countries[this.index].isoAlpha3Code = (this.isoAlpha3CodeInput.value);
    this.countries[this.index].latestRecordedPopulation = parseInt(this.latestRecordedPopulationInput.value);
    this.countries[this.index].continent = (this.continentInput.value);
    this.countries[this.index].region = (this.regionInput.value);
    this.countries[this.index].subregion = (this.subregionInput.value);
 
  }

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

  createNewButtonClick() {
    let c: Country = this.countries[this.index];
    this.countries.push(new Country(0, "", "", "", 0, c.continent, c.region, c.subregion));
    this.index = this.countries.length -1;
    this.lastIndex = this.countries.length -1;
    this.creatingNew = true;
    this.displayCountry();
  }

  saveButtonClick() {
    if (this.creatingNew) {
    this.updateCountryFromForm();
    this.countriesService.newCountry(this.countries[this.index]).subscribe(
      response => {
      console.log(response);
      this.countries[this.index] = response;
      this.creatingNew = false;
      this.snackBar.open(this.countries[this.index].countryName, "Saved", {
        duration: 2000,
      });},
        error => console.log(error)
    );
  }
  else{
    this.countriesService.updateCountry(this.countries[this.index]).subscribe(
      response => {
        console.log(response);
        this.snackBar.open(this.countries[this.index].countryName, "Saved", { duration: 2000, });
      },
      error => console.log(error)
    );
  }
}

  cancelButtonClick() {
    let i: number = this.index;
    this.index--;
    this.countries.splice(i, 1);
    this.lastIndex = this.countries.length -1;
    this.creatingNew = false;
    this.displayCountry();
  }

  // deleteButtonClick() {
  //   this.countriesService.deleteCountry(this.countries[this.index].countryId).subscribe(
  //     deletedCountry => {
  //       console.log("Country deleted successfully:", deletedCountry);
  //       // Optionally, display the deleted country to the user
  //     },
  //     error => console.log("Error deleting country:", error)
  //   );
  // }
  

  deleteButtonClick() {
    this.countriesService.deleteCountry(this.countries[this.index].countryId).subscribe(
      response => {
        let i: number = this.index;
        this.index--;
        this.countries.splice(i);
        this.lastIndex = this.countries.length -1;
        this.creatingNew = false;
        this.displayCountry();
      },
        error => console.log(error)
    );
  }
}
