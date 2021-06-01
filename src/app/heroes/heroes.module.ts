import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ListComponent } from './list/list.component';
import { HeroeComponent} from './hero/hero.component';


@NgModule({
    declarations: [
        HeroeComponent,
        ListComponent
    ], 
    exports: [
        ListComponent
    ],
    imports: [
        CommonModule
    ]
})
export class HeroesModule {}