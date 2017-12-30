import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app-state';
import { selectLoaded } from '../../store/cocktails/cocktails.selectors';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/take';
import { isUndefined } from 'util';
import { SelectCocktailAction } from '../../store/cocktails/cocktails.actions';

@Injectable()
export class CocktailsPageResolver implements Resolve<boolean> {

    constructor(
        private store: Store<AppState>
    ) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        if (!isUndefined(route.params.id)) {
            this.store.dispatch(new SelectCocktailAction(route.params.id));
        }
        return this.hasCocktailsLoaded();
    }

    private hasCocktailsLoaded(): Observable<boolean> {
        return this.store.select(selectLoaded)
            .filter(loaded => {
                return loaded;
            })
            .take(1);
    }


}
