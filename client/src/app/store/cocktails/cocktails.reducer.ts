import { Action } from '@ngrx/store';
import { Cocktail } from '../../shared/cocktails/cocktails.model';
import { ActionType, CocktailsLoadedAction } from './cocktails.actions';

export interface State {
    cocktails: Cocktail[];
}

export function cocktailReducer(state: State, action: Action): State {
    switch (action.type) {
        case ActionType.CocktailsLoaded:
            return {
                ...state,
                cocktails: (<CocktailsLoadedAction> action).payload
            };
        default:
            return state;
    }
}
