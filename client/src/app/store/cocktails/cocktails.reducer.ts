import { Action } from '@ngrx/store';
import { Cocktail } from '../../shared/cocktails/cocktails.model';
import { ActionType, CocktailsLoadedAction, SelectCocktailAction } from './cocktails.actions';

export interface State {
    cocktails: Cocktail[];
    selectedCocktail: number;
}

const initialState: State = {
    cocktails: null,
    selectedCocktail: null
};

export function cocktailReducer(state: State = initialState, action: Action): State {
    switch (action.type) {
        case ActionType.CocktailsLoaded:
            return {
                ...state,
                cocktails: (<CocktailsLoadedAction>action).payload
            };
        case ActionType.SelectCocktail:
            const index = state.cocktails.findIndex(cocktail => {
                return cocktail === (<SelectCocktailAction>action).payload;
            });
            return {
                ...state,
                selectedCocktail: index === -1 ? null : index
            };
        default:
            return state;
    }
}
