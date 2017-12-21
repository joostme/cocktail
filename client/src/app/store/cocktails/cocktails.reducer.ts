import { Action } from '@ngrx/store';
import { Cocktail } from '../../shared/cocktails/cocktails.model';
import { ActionType, CocktailsLoadedAction, SelectCocktailAction } from './cocktails.actions';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export interface State extends EntityState<Cocktail> {
    selectedCocktailId: number | null;
}

export const adapter: EntityAdapter<Cocktail> = createEntityAdapter<Cocktail>();

const initialState: State = adapter.getInitialState({
    selectedCocktailId: null
});

export function cocktailReducer(state: State = initialState, action: Action): State {
    switch (action.type) {
        case ActionType.CocktailsLoaded:
            return adapter.addAll((<CocktailsLoadedAction> action).payload, state);
        case ActionType.SelectCocktail:
            return {
                ...state,
                selectedCocktailId: (<SelectCocktailAction> action).payload
            };
        default:
            return state;
    }
}
