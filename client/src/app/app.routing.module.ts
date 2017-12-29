import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CocktailsPageResolver } from './pages/cocktails/cocktails-page.resolver';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'cocktails',
        pathMatch: 'full'
    },
    {
        path: 'cocktails',
        loadChildren: 'app/pages/cocktails/cocktails-page.module#CocktailsPageModule',
        resolve: [CocktailsPageResolver]
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { useHash: true }),
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}
