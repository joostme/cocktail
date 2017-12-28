import { Action } from '@ngrx/store';
import { Cocktail } from '../../shared/cocktails/cocktails.model';
import { ActionType, CocktailsLoadedAction, SelectCocktailAction, AddToFavoritesAction } from './cocktails.actions';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { stagger } from '@angular/core/src/animation/dsl';

export interface State extends EntityState<Cocktail> {
    selectedCocktailId: number | null;
    favorites: number[];
}

export const adapter: EntityAdapter<Cocktail> = createEntityAdapter<Cocktail>();

const initialState: State = adapter.getInitialState({
    selectedCocktailId: null,
    favorites: []
});

export function cocktailReducer(state: State = initialState, action: Action): State {
    switch (action.type) {
        case ActionType.CocktailsLoaded:
            return adapter.addAll((<CocktailsLoadedAction>action).payload, state);
        case ActionType.SelectCocktail:
            return {
                ...state,
                selectedCocktailId: (<SelectCocktailAction>action).payload
            };
        case ActionType.AddToFavorites:
            const favoriteId = (<AddToFavoritesAction>action).payload.id;
            if (state.favorites.includes(favoriteId)) {
                return state;
            }
            return {
                ...state,
                favorites: [...state.favorites, favoriteId]
            };
        default:
            return state;
    }
}
