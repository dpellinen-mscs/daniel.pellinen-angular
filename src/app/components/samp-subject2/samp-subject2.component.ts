import { Component, OnInit, OnDestroy } from '@angular/core';
import  {CountriesService} from '../shared/countries.service';
import { ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-samp-subject2',
  templateUrl: './samp-subject2.component.html',
  styleUrls: ['./samp-subject2.component.css']
})
export class SampSubject2Component implements OnInit {
  public subjectData: any;
  private subscription!: Subscription;


  constructor(private countriesService: CountriesService, private cd: ChangeDetectorRef) { }

  ngOnInit() {
    console.log("Samp2 ngOninit()");
    this.countriesService.sampSubject.next("Samp2 ngOnInit");

    this.subscription = this.countriesService.sampSubject.subscribe( data => {
      this.subjectData = data;
      console.log("samp2 revieced subject: " + data);
      this.cd.detectChanges(); 
    });

  }
  
  ngOnDestroy() {
    console.log("Samp2 OnDestroy()");
    this.subscription.unsubscribe();
  }

  subject2ButtonClick() {
    this.countriesService.sampSubject.next("Samp2 ButtonClick");
  }
}
