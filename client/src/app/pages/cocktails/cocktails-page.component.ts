import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Cocktail } from '../../shared/cocktails/cocktails.model';
import { CocktailsService } from '../../shared/cocktails/cocktails.service';
import { AppState } from '../../store/app-state';
import { Store } from '@ngrx/store';
import { LoadCocktailsAction } from '../../store/cocktails/cocktails.actions';
import { selectCocktails, selectFavorites } from '../../store/cocktails/cocktails.selectors';

@Component({
    selector: 'ctl-cocktails-page',
    templateUrl: './cocktails-page.component.html',
    styleUrls: ['./cocktails-page.component.sass']
})
export class CocktailsPageComponent {

    cocktails: Observable<Cocktail[]>;

    favorites: Observable<number[]>;

    constructor(
        private cocktailsService: CocktailsService,
        private store: Store<AppState>
    ) {
        this.cocktails = this.store.select(selectCocktails);
        this.favorites = this.store.select(selectFavorites);
    }

    onSearch(searchString: string) {
        console.log(searchString);
    }

}
