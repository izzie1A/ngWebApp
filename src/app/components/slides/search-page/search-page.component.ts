import { Component } from '@angular/core';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent {
  autoSaveIntervalArray: NodeJS.Timeout[] = [];
  timeCounter:number= 0;
  
  
  blendValue: number = 0.01;
  sinHeight:number = 100;
  sinRate:number = 0.5;

  r:any

  sStyle:any;
  constructor() {
    this.timer();
  };
  
  timer() {
    let interval = setInterval(() => {
      this.timeCounter = this.timeCounter+this.blendValue;
      let y = (Math.sin(this.timeCounter) * this.sinHeight / 2)  + (this.sinHeight / 2);
      let x = (Math.cos(this.timeCounter) * this.sinHeight / 2)  + (this.sinHeight / 2);
      // let y = (Math.cos(this.timeCounter) * this.sinHeight / 2) * this.blendValue + (this.sinHeight / 2);
      // let y = (Math.cos(this.timeCounter) * this.sinHeight / 2) * this.blendValue + (this.sinHeight / 2);
      // let y = this.timeCounter*10;
      // let x = this.timeCounter*10;
      // let x = this.sinHeight/2;
      this.sStyle = 'right:' + x.toString() + '%;' + 'bottom:' + y.toString() + '%;';
      this.r = {
        sin:Math.sin(this.timeCounter),
        cos:Math.cos(this.timeCounter),
        tan:Math.tan(this.timeCounter),
      }
    },
    10);
    this.autoSaveIntervalArray.push(interval);
  }
}
