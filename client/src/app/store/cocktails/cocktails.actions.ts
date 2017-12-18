import { Action } from '@ngrx/store';
import { Cocktail } from '../../shared/cocktails/cocktails.model';

export enum ActionType {
    LoadCocktails = '[Cocktails] Load cocktails',
    CocktailsLoaded = '[Cocktails] Cocktails loaded'
}

export class LoadCocktailsAction implements Action {
    type = ActionType.LoadCocktails;
}

export class CocktailsLoadedAction implements Action {
    type = ActionType.CocktailsLoaded;

    constructor(
        public payload: Cocktail[]
    ) { }
}
