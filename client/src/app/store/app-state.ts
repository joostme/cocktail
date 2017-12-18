import { State as cocktailState } from './cocktails/cocktails.reducer';

export interface AppState {
    cocktails: cocktailState;
}
