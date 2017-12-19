import { AppState } from '../app-state';
import { isNull } from 'lodash';

export function getCocktails() {
    return (state: AppState) => {
        return state.cocktails.cocktails;
    };
}

export function getSelectedCocktail() {
    return (state: AppState) => {
        const selectedCocktailIndex = state.cocktails.selectedCocktail;
        if (!isNull(selectedCocktailIndex)) {
            return state.cocktails.cocktails[selectedCocktailIndex];
        }
        return null;
    };
}
