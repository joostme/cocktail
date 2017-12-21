import { AppState } from '../app-state';
import { isNull } from 'lodash';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State as CocktailState, adapter as cocktailAdapter } from './cocktails.reducer';

export const getSelectedCocktailId = (state: CocktailState) => state.selectedCocktailId;

export const selectCocktailState = createFeatureSelector<CocktailState>('cocktails');

export const {
    selectAll: selectCocktails,
    selectIds: selectCocktailIds,
    selectEntities: selectCocktailEntities,
    selectTotal: selectCocktailToal
} = cocktailAdapter.getSelectors(selectCocktailState);

export const selectCurrentCocktailId = createSelector(selectCocktailState, getSelectedCocktailId);
export const selectCurrentCocktail = createSelector(
    selectCocktailEntities,
    selectCurrentCocktailId,
    (cocktails, id) => cocktails[id]
);
