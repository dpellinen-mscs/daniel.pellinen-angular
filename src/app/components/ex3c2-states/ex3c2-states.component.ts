import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { StateProvince } from '../shared/state-province.model';
import { Input } from '@angular/core';
import { StatesProvincesService } from '../shared/states-provinces.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-ex3c2-states',
  templateUrl: './ex3c2-states.component.html',
  styleUrls: ['./ex3c2-states.component.css']
})
export class Ex3c2StatesComponent implements OnInit {

  @Input() stateProvince!: StateProvince;

  public stateProvinceCodeInput = new FormControl('', [Validators.required]);
  public stateProvinceNameInput = new FormControl('', [Validators.required]);
  public salesterritoryInput = new FormControl('', [Validators.required]);
  public latestRecordedPopulationInput = new FormControl('', [Validators.required]);

  // public stateProvince: StateProvince = new StateProvince(101, 'MN', 'Minnesota', 1, 'Midwest', 5639632);

  constructor(private stateProvincesService: StatesProvincesService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.dispalyStateProvince();
  }

  dispalyStateProvince() : void {
    this.stateProvinceCodeInput.setValue(this.stateProvince.stateProvinceCode);
    this.stateProvinceNameInput.setValue(this.stateProvince.stateProvinceName);
    this.salesterritoryInput.setValue(this.stateProvince.salesTerritory);
    this.latestRecordedPopulationInput.setValue(this.stateProvince.latestRecordedPopulation);
  }

  updateStateFromForm() : void {
    this.stateProvince.stateProvinceCode = this.stateProvinceCodeInput.value;
    this.stateProvince.stateProvinceName = this.stateProvinceNameInput.value;
    this.stateProvince.salesTerritory = this.salesterritoryInput.value;
    this.stateProvince.latestRecordedPopulation = this.latestRecordedPopulationInput.value;
    console.log('StateProvince after form changes:', this.stateProvince); // Add this log statement
  }

  saveButtonClick() {
    this.updateStateFromForm();
    console.log("ID" + this.stateProvince.stateProvinceId);
    if (this.stateProvince.stateProvinceId != 0) {
      this.stateProvincesService.updateStateProvince(this.stateProvince).subscribe(
        response => {
          console.log(response);
          this.snackBar.open(this.stateProvince.stateProvinceName, "saved", { duration: 2000, });
        },
        error => console.error("Update failed:", error.message)
      );
    }
    else {
      this.stateProvincesService.newStateProvince(this.stateProvince).subscribe(
        response => {
         this.stateProvince = response;
          this.snackBar.open(this.stateProvince.stateProvinceName, "saved", { duration: 2000, });
        },
        error => console.log("Create new failed: " + error)
      );
    }
  }

  // saveButtonClick() {
  //   console.log("ID" + this.stateProvince.stateProvinceId);
  //   if (this.stateProvince.stateProvinceId != 0) {
  //     this.stateProvincesService.updateStateProvince(this.stateProvince).subscribe(
  //       response => {
  //         console.log(response);
  //         this.snackBar.open(this.stateProvince.stateProvinceName, "saved", { duration: 2000, });
  //       },
  //       error => console.error("Update failed:", error.message)
  //     );
  //   }
  //   else {
  //     this.stateProvincesService.newStateProvince(this.stateProvince).subscribe(
  //       response => {
  //        this.stateProvince = response;
  //         this.snackBar.open(this.stateProvince.stateProvinceName, "saved", { duration: 2000, });
  //       },
  //       error => console.log("Create new failed: " + error)
  //     );
  //   }
  // }

  deleteButtonClick() {
    this.stateProvincesService.deleteStateProvince(this.stateProvince.stateProvinceId).subscribe(
      response => {
        console.log(response);
        this.snackBar.open(this.stateProvince.stateProvinceName, "deleted", { duration: 2000, });
      },
      error => console.error("Delete failed:", error.message)
    );
  }
}

  

  // saveButtonClick() {
  //   this.stateProvincesService.updateStateProvince(this.stateProvince).subscribe(
  //     response => {
  //        console.log(response);
  //       this.snackBar.open(this.stateProvince.stateProvinceName, "saved", { duration: 2000, });
  //     },
  //     error => console.log("error is here")
  //   );
  // }


