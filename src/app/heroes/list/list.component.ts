import { Component} from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [
  ]
})
export class ListComponent{

  public heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  public deletedHeroes: string = '';

  deleteHero(){
    this.deletedHeroes = this.heroes.pop() || '';
  }
}
