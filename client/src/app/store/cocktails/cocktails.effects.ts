import { Actions, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { ActionType, CocktailsLoadedAction, SubmitCocktailAction, CocktailSubmittedAction, LoadCocktailsAction } from './cocktails.actions';
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

    @Effect()
    submitCocktail = this.actions
        .ofType(ActionType.SubmitCocktail)
        .map((action: SubmitCocktailAction) => action.payload)
        .switchMap(newCocktail => {
            return this.cocktailsService.submit(newCocktail)
                .map(cocktail => new CocktailSubmittedAction(cocktail));
        });

    @Effect()
    reloadAfterSubmit = this.actions
        .ofType(ActionType.CocktailSubmitted)
        .map(() => new LoadCocktailsAction());
}
