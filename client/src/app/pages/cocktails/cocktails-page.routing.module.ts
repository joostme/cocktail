import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CocktailsPageComponent } from './cocktails-page.component';
import { CocktailDetailComponent } from './cocktail-detail/cocktail-detail.component';
import { CreateCocktailComponent } from './create-cocktail/create-cocktail.component';
import { CocktailsPageResolver } from './cocktails-page.resolver';

const routes: Routes = [
    {
        path: '',
        component: CocktailsPageComponent,
        resolve: [CocktailsPageResolver]
    },
    {
        path: 'create',
        component: CreateCocktailComponent
    },
    {
        path: ':id',
        component: CocktailDetailComponent,
        resolve: [CocktailsPageResolver]
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
