import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl:  './app.component.html',
})
export class AppComponent {
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
