import { Component } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
        <h1>{{title}}</h1>
        <h3>La base es: <strong>{{base}}</strong></h3>

        <button (click)="gather(base, true)">+{{base}}</button>
        <span>{{number}}</span>
        <!-- <button (click)="gather(base, false)">-{{base}}</button> -->
        <button (click)="gather(-base, true)">-{{base}}</button>
        <!-- <button (click)="gather(base * -1, true)">-{{base}}</button> -->
    
    `
})
export class CounterComponent {
  public title : string = 'Counter-App';
  public number: number = 10;
  public base  : number = 5;

  // sum() {
  //   this.number += 1;
  // }
  // sub(){
  //   this.number -= 1;
  // }

  gather( value:number, sum: boolean ){
    if(sum){
      this.number += value;
    } else {
      this.number -= value;
    }
  }
}