import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../../../shared/cocktails/cocktails.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app-state';
import { Observable } from 'rxjs/Observable';
import { selectCurrentCocktail } from '../../../store/cocktails/cocktails.selectors';
import { SelectCocktailAction } from '../../../store/cocktails/cocktails.actions';

@Component({
    selector: 'ctl-cocktail-detail',
    templateUrl: './cocktail-detail.component.html',
    styleUrls: ['./cocktail-detail.component.sass']
})
export class CocktailDetailComponent {
    cocktail: Observable<Cocktail>;

    constructor(
        private router: Router,
        private store: Store<AppState>,
        private activatedRoute: ActivatedRoute

    ) {
        this.store.dispatch(new SelectCocktailAction(activatedRoute.snapshot.params.id));
        this.cocktail = this.store.select(selectCurrentCocktail);
    }

    goToGroup(name: string) {
        this.router.navigate(['/'], { queryParams: {group: name}});
    }
}
