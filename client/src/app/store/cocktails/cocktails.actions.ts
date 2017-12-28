import { Action } from '@ngrx/store';
import { Cocktail } from '../../shared/cocktails/cocktails.model';

export enum ActionType {
    LoadCocktails = '[Cocktails] Load cocktails',
    CocktailsLoaded = '[Cocktails] Cocktails loaded',
    SelectCocktail = '[Cocktails] Select Cocktail',
    SubmitCocktail = '[Cocktails] Submit Cocktail',
    CocktailSubmitted = '[Cockails] Cocktail submitted',
    AddToFavorites = '[Cocktails] Add to favorites'
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

export class SelectCocktailAction implements Action {
    type = ActionType.SelectCocktail;

    constructor(
        public payload: number
    ) { }
}

export class SubmitCocktailAction implements Action {
    type = ActionType.SubmitCocktail;

    constructor(
        public payload: Partial<Cocktail>
    ) { }
}

export class CocktailSubmittedAction implements Action {
    type = ActionType.CocktailSubmitted;

    constructor(
        public payload: Cocktail
    ) { }
}

export class AddToFavoritesAction implements Action {
    type = ActionType.AddToFavorites;

    constructor(
        public payload: Cocktail
    ) { }
}
