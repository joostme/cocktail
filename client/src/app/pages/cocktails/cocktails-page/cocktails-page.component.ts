import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Cocktail } from '../../../shared/cocktails/cocktails.model';
import { CocktailsService } from '../../../shared/cocktails/cocktails.service';
import { AppState } from '../../../store/app-state';
import { Store } from '@ngrx/store';
import { LoadCocktailsAction } from '../../../store/cocktails/cocktails.actions';
import { selectCocktails } from '../../../store/cocktails/cocktails.selectors';

@Component({
    selector: 'ctl-cocktails-page',
    templateUrl: './cocktails-page.component.html',
    styleUrls: ['./cocktails-page.component.sass']
})
export class CocktailsPageComponent {

    cocktails: Observable<Cocktail[]>;

    constructor(
        private cocktailsService: CocktailsService,
        private store: Store<AppState>
    ) {
        this.store.dispatch(new LoadCocktailsAction());
        this.cocktails = this.store.select(selectCocktails);
    }

    onSearch(searchString: string) {
        console.log(searchString);
    }

}
