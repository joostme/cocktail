import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CocktailsPageComponent } from './cocktails-page.component';

const routes: Routes = [
    {
        path: '',
        component: CocktailsPageComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule
    ]
})
export class CocktailsPageRoutingModule {
}
