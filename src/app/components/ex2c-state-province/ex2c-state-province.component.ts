import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {StateProvince} from './../shared/state-province.model';
import { FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DataSource } from '@angular/cdk/collections';
import {StatesProvincesService} from '../shared/states-provinces.service';

@Component({
  selector: 'app-ex2c-state-province',
  templateUrl: './ex2c-state-province.component.html',
  styleUrls: ['./ex2c-state-province.component.css']
})
export class Ex2cStateProvinceComponent implements OnInit {

  public stateProvinceIdInput = new FormControl('');
  public stateProvinceCodeInput = new FormControl('', [Validators.required]);
  public stateProvinceNameInput = new FormControl('', [Validators.required]);
  public countryIdInput = new FormControl('', [Validators.required]);
  public salesterritoryInput = new FormControl('', [Validators.required]);
  public latestRecordedPopulationInput = new FormControl('', [Validators.required]);

  public stateProvince!: StateProvince;

  constructor(private statesProvincesService: StatesProvincesService) { }

  ngOnInit() {

    this.statesProvincesService.getStateProvince(30).subscribe(data => {
      this.stateProvince = data;
      this.displayStateProvince();
  });
  }

  displayStateProvince() : void {
    this.stateProvinceIdInput.setValue(this.stateProvince.stateProvinceId);
    this.stateProvinceCodeInput.setValue(this.stateProvince.stateProvinceCode);
    this.stateProvinceNameInput.setValue(this.stateProvince.stateProvinceName);
    this.countryIdInput.setValue(this.stateProvince.countryId);
    this.salesterritoryInput.setValue(this.stateProvince.salesTerritory);
    this.latestRecordedPopulationInput.setValue(this.stateProvince.latestRecordedPopulation);
  }

  getMinnesotaButton() : void {
    this.statesProvincesService.getStateProvince(24).subscribe(data => {
      this.stateProvince = data;
      this.displayStateProvince();
    });
  }

  getWisconsinButton() : void {
    this.statesProvincesService.getStateProvince(52).subscribe(data => {
      this.stateProvince = data;
      this.displayStateProvince();
    });
}

getIowaButton() : void {
  this.statesProvincesService.getStateProvince(16).subscribe(data => {
    this.stateProvince = data;
    this.displayStateProvince();
  });
}

}
