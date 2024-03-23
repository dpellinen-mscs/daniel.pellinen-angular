import { Component, OnInit, OnDestroy } from '@angular/core';
import { CountriesService } from '../shared/countries.service';
import { Subscription } from 'rxjs';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-samp-subject1',
  templateUrl: './samp-subject1.component.html',
  styleUrls: ['./samp-subject1.component.css']
})
export class SampSubject1Component implements OnInit {
  public subjectData: any;
  private subscription!: Subscription;

  constructor(private countriesService: CountriesService, private cd: ChangeDetectorRef) { }

  ngOnInit() {
    console.log("Samp1 ngOninit()");
    this.countriesService.sampSubject.next("Samp1 ngOnInit");
   this.subscription = this.countriesService.sampSubject.subscribe(data => {
        this.subjectData = data;
        console.log("samp1 received subject data: " + data);
        this.cd.detectChanges(); 
      },
      error => {
        console.error("Error in sampSubject subscription: ", error);
      }
    );
  }

  ngOnDestroy() {
    console.log("Samp1 OnDestroy()");
    this.subscription.unsubscribe();
  }

  subject1ButtonClick() {
    this.countriesService.sampSubject.next("Samp1 ButtonClick");
  }

}
