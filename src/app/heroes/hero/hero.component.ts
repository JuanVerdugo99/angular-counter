import { Component } from "@angular/core";


@Component({
    selector: 'app-heroe',
    templateUrl: './hero.component.html'
})
export class HeroeComponent {

    public name: string = 'Ironman';
    public age : number = 45;

    get nameCap(): string {
        return this.name.toUpperCase();
    }

    getName(): string {
        return `${this.name} - ${this.age}`;
    }

    changeName():void {
        this.name = 'Spiderman';
    }

    changeAge(): void {
        this.age = 30;
    }

}