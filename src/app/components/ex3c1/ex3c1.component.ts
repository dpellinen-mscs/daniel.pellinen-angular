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
import { StatesProvincesService } from '../shared/states-provinces.service';
import { StateProvince } from '../shared/state-province.model';
// import {RegionsService} from '../shared/regions.service';

@Component({
  selector: 'app-ex3c1',
  templateUrl: './ex3c1.component.html',
  styleUrls: ['./ex3c1.component.css']
})
export class Ex3c1Component implements OnInit {
  public regionSelect = new FormControl({value: '', disabled: false});
  public subregionSelect = new FormControl({value: '', disabled: false});
  public countrySelect = new FormControl({value: '', disabled: false});
  public countries: Country[] = []; 
  public selectedCountry!: Country;
  public index: number = 0;

  public stateProvinces: StateProvince[] = new Array<StateProvince>();

  public subregions!: string[];
  public selectedSubregion: string = 'Northern America';

  public regions!: string[];
  public selectedRegion: string = 'Americas';

  constructor(private countriesService: CountriesService,
    private subregionsService: SubregionsService,
     private regionsService: RegionsService,
     private stateProvincesService: StatesProvincesService
     ) { }
    

    //  ngOnInit(): void {
    //   this.regionsService.getRegions().subscribe(data => {
    //     this.regions = data;
    //   });
  
    //       this.subregionsService.getSubregions("Americas").subscribe(data => {
    //       this.subregions = data;   
    //  }); 
  
    //     this.countriesService.getCountries(this.selectedSubregion).subscribe(data => {
    //       this.countries = data;
    //       if (this.countries.length > 0)
    //       this.selectedCountry = this.countries[0];
  
    //       this.stateProvincesService.getStateProvinces(this.selectedCountry.countryId).subscribe(data => {
    //         this.stateProvinces = data;
    //       });
    //       });  
    //  }


    ngOnInit() {
      this.regionsService.getRegions().subscribe(data => {
        this.regions = data;
        this.regionSelect.setValue(this.selectedRegion);

          this.subregionsService.getSubregions(this.selectedRegion).subscribe(data => {
          this.subregions = data;   
          this.subregionSelect.setValue("Northern America"); 

        this.countriesService.getCountries(this.selectedSubregion).subscribe(data => {
          this.countries = data;
          if (this.countries.length >= 2)
          this.selectedCountry = this.countries[1];
          this.countrySelect.setValue(this.selectedCountry.countryId);

          this.stateProvincesService.getStateProvinces(this.selectedCountry.countryId).subscribe(data => {
            this.stateProvinces = data;
          });
          });
         });
        });  
      }

      subregionSelectChange() {
      this.countriesService.getCountries(this.subregionSelect.value).subscribe(data => {
        // this.index = 0;
        this.countries = data;  
        if (this.countries.length > 0)
        this.countrySelect.setValue(this.countries[0].countryId);  
        this.countrySelectChange();  
      });
      }
    
      countrySelectChange() {
        if (this.countries.length > 0) {
          let countryId = this.countrySelect.value;
          for (let country of this.countries) {
            if (country.countryId == countryId) {
              this.selectedCountry = country;
              break;
            }
          }
          this.stateProvincesService.getStateProvinces(this.selectedCountry.countryId).subscribe(data => {
            this.stateProvinces = data;
          });
        }
      }  
    
    

      regionSelectChange() {
        this.subregionsService.getSubregions(this.regionSelect.value).subscribe(data => {
          this.subregions = data;
          this.selectedSubregion = this.subregions[0];
          this.subregionSelect.setValue(this.selectedSubregion);

          this.subregionSelectChange();
        });
    } 

    createNewButtonClick() {
      this.stateProvinces.push(new StateProvince(0, '', '', this.selectedCountry.countryId, '', 0));
  }
}