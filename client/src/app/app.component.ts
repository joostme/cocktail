import { Component } from '@angular/core';
import { LoadCocktailsAction } from './store/cocktails/cocktails.actions';
import { AppState } from './store/app-state';
import { Store } from '@ngrx/store';

@Component({
    selector: 'ctl-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass']
})
export class AppComponent {

    constructor(
        private store: Store<AppState>
    ) {
        this.store.dispatch(new LoadCocktailsAction());
    }
}
