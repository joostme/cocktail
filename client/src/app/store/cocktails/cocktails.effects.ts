import { Actions, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { ActionType, CocktailsLoadedAction } from './cocktails.actions';
import 'rxjs/add/operator/switchMap';
import { CocktailsService } from '../../shared/cocktails/cocktails.service';


@Injectable()
export class CocktailEffects {
    constructor(
        private actions: Actions,
        private cocktailsService: CocktailsService
    ) { }

    @Effect()
    loadCocktails = this.actions
        .ofType(ActionType.LoadCocktails)
        .switchMap(() => {
            return this.cocktailsService.getAllCocktails()
                .map(cocktails => new CocktailsLoadedAction(cocktails));
        });
}
