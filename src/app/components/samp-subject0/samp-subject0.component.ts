import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../shared/countries.service';
import { ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-samp-subject0',
  templateUrl: './samp-subject0.component.html',
  styleUrls: ['./samp-subject0.component.css']
})
export class SampSubject0Component implements OnInit {
  public subjectData: any;
  private subscription!: Subscription;


  constructor(private countriesService: CountriesService, private cd: ChangeDetectorRef) { }

  ngOnInit() {
    console.log("Samp0 ngOninit()");
    this.countriesService.sampSubject.next("Samp0 ngOnInit");

    this.subscription = this.countriesService.sampSubject.subscribe( data => {
      this.subjectData = data;
      console.log("Samp0 recieved Subject: " + data);
      this.cd.detectChanges(); 
    });
  }

  subject0ButtonClick() {
    this.countriesService.sampSubject.next("Samp0 ButtonClick");
  }


ngOnDestroy() {
  console.log("Samp0 OnDestroy()");
  this.subscription.unsubscribe();
}
}

//--------------------------------------------------------------------------------------------------------------------------------------

// import { Component, OnInit, OnDestroy } from '@angular/core';
// import { CountriesService } from '../shared/countries.service';
// import { Subscription } from 'rxjs';

// @Component({
//   selector: 'app-samp-subject0',
//   templateUrl: './samp-subject0.component.html',
//   styleUrls: ['./samp-subject0.component.css']
// })
// export class SampSubject0Component implements OnInit, OnDestroy {
//   public subjectData; // Changed to public for template access
//   private subscription: Subscription; // Holds the subscription to unsubscribe later

//   constructor(private countriesService: CountriesService) { }

//   ngOnInit(): void {
//     console.log("Samp0 ngOninit()");
//     this.countriesService.sampSubject.next("Samp0 ngOnInit");

//     // Store the subscription
//     this.subscription = this.countriesService.sampSubject.subscribe(data => {
//       this.subjectData = data;
//       console.log("Samp0 received Subject: " + data);
//     });
//   }

//   ngOnDestroy(): void {
//     // Ensure we unsubscribe when the component is destroyed
//     if (this.subscription) {
//       this.subscription.unsubscribe();
//     }
//   }

//   subject0ButtonClick() {
//     this.countriesService.sampSubject.next("Samp0 ButtonClick");
//   }

// }



// import { Component, OnInit, OnDestroy } from '@angular/core';
// import { CountriesService } from '../shared/countries.service';
// import { Subject, takeUntil } from 'rxjs';

// @Component({
//   selector: 'app-samp-subject0',
//   templateUrl: './samp-subject0.component.html',
//   styleUrls: ['./samp-subject0.component.css']
// })
// export class SampSubject0Component implements OnInit, OnDestroy {
//   public subjectData: any; // Make it public to access in the template
//   private destroy$: Subject<boolean> = new Subject(); // For unsubscribing

//   constructor(private countriesService: CountriesService) { }

//   ngOnInit(): void {
//     this.countriesService.sampSubject.next("Samp0 ngOnInit");

//     this.countriesService.sampSubject.pipe(takeUntil(this.destroy$)).subscribe(data => {
//       this.subjectData = data;
//       console.log("Samp0 received Subject: " + data);
//     });
//   }

//   ngOnDestroy(): void {
//     // Notify the takeUntil to unsubscribe from all subscriptions
//     this.destroy$.next(true);
//     this.destroy$.complete();
//   }

//   subject0ButtonClick() {
//     this.countriesService.sampSubject.next("Samp0 ButtonClick");
//   }
// }
