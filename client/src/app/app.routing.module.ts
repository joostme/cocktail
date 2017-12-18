import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'cocktails',
        pathMatch: 'full'
    },
    {
        path: 'cocktails',
        loadChildren: 'app/pages/cocktails/cocktails-page/cocktails-page.module#CocktailsPageModule'
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
