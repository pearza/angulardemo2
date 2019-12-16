import { Component } from '@angular/core';
 
@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html`,
  styleUrls:  ['./app.component.css']
})
export class AppComponent  { 
sports:string[];

constructor(){
  this.sports = [];
}

addSport(sport: string) {
  if (sport) {
    this.sports.push(sport);
  }
}  

}