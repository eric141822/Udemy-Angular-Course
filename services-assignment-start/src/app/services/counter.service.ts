import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

    toActive: number = 0;
    toInactive: number = 0;
  constructor() { }

  countToActive(){
    this.toActive++;
    console.log("Inactive -> Active : " + this.toActive);
  }
  countToInactive(){
    this.toInactive++;
    console.log("Active -> Inactive : " + this.toInactive);
  }
}
