import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CocktailsPageComponent } from './cocktails-page.component';
import { CocktailDetailComponent } from './cocktail-detail/cocktail-detail.component';
import { CreateCocktailComponent } from './create-cocktail/create-cocktail.component';

const routes: Routes = [
    {
        path: '',
        component: CocktailsPageComponent
    },
    {
        path: 'create',
        component: CreateCocktailComponent
    },
    {
        path: ':id',
        component: CocktailDetailComponent
    },
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