import { Component, OnInit, Input } from '@angular/core';
import { Cocktail } from '../../../shared/cocktails/cocktails.model';
import { Router, ActivatedRoute } from '@angular/router';
import { AppState } from '../../../store/app-state';
import { Store } from '@ngrx/store';
import { SelectCocktailAction } from '../../../store/cocktails/cocktails.actions';

@Component({
    selector: 'ctl-cocktail-list',
    templateUrl: './cocktail-list.component.html',
    styleUrls: ['./cocktail-list.component.sass']
})
export class CocktailListComponent {

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private store: Store<AppState>
    ) { }

    @Input()
    cocktails: Cocktail[];

    goToDetail(cocktail: Cocktail) {
        this.store.dispatch(new SelectCocktailAction(cocktail.id));
        this.router.navigate([cocktail.name], { relativeTo: this.activatedRoute });
    }

    onGroupDetail(group: string) {
        this.router.navigate([''], { queryParams: { group }, relativeTo: this.activatedRoute });
    }

}
