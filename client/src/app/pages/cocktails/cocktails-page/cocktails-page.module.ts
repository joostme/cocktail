import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CocktailsPageComponent } from './cocktails-page.component';
import { CocktailSearchComponent } from './cocktail-search/cocktail-search.component';
import { CocktailListComponent } from './cocktail-list/cocktail-list.component';
import { CocktailsPageRoutingModule } from './cocktails-page.routing.module';
import { ListItemComponent } from './cocktail-list/list-item/list-item.component';
import { CocktailDetailComponent } from './cocktail-detail/cocktail-detail.component';

@NgModule({
    imports: [
        CommonModule,
        CocktailsPageRoutingModule
    ],
    declarations: [
        CocktailsPageComponent,
        CocktailSearchComponent,
        CocktailListComponent,
        ListItemComponent,
        CocktailDetailComponent
    ]
})
export class CocktailsPageModule {
}
