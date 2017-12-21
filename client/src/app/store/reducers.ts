import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './app-state';
import { cocktailReducer } from './cocktails/cocktails.reducer';

export const reducers: ActionReducerMap<AppState> = {
    cocktails: cocktailReducer,
};
