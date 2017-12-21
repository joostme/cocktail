import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CocktailsPageComponent } from './cocktails-page.component';
import { CocktailSearchComponent } from './cocktail-search/cocktail-search.component';
import { CocktailListComponent } from './cocktail-list/cocktail-list.component';
import { CocktailsPageRoutingModule } from './cocktails-page.routing.module';
import { ListItemComponent } from './cocktail-list/list-item/list-item.component';
import { CocktailDetailComponent } from './cocktail-detail/cocktail-detail.component';
import { CreateCocktailComponent } from './create-cocktail/create-cocktail.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        CocktailsPageRoutingModule,
        ReactiveFormsModule
    ],
    declarations: [
        CocktailsPageComponent,
        CocktailSearchComponent,
        CocktailListComponent,
        ListItemComponent,
        CocktailDetailComponent,
        CreateCocktailComponent
    ]
})
export class CocktailsPageModule {
}
