import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../../../../shared/cocktails/cocktails.model';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../store/app-state';
import { Observable } from 'rxjs/Observable';
import { getSelectedCocktail } from '../../../../store/cocktails/cocktails.selectors';

@Component({
    selector: 'ctl-cocktail-detail',
    templateUrl: './cocktail-detail.component.html',
    styleUrls: ['./cocktail-detail.component.sass']
})
export class CocktailDetailComponent {
    cocktail: Observable<Cocktail>;

    constructor(
        private router: Router,
        private store: Store<AppState>
    ) {
        this.cocktail = this.store.select(getSelectedCocktail());
    }

    goToGroup(name: string) {
        this.router.navigate(['/'], { queryParams: {group: name}});
    }
}
