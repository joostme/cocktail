import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { Cocktail } from './cocktails.model';
import { allCocktailsQuery } from './cocktails.requests';
import 'rxjs/add/operator/map';
import { GraphqlService } from '../graphql/graphql.service';

@Injectable()
export class CocktailsService {

    constructor(
        private graphqlService: GraphqlService
    ) { }

    getAllCocktails(): Observable<Cocktail[]> {
        return this.graphqlService.query<Cocktail[]>(environment.remoteHost, allCocktailsQuery);
    }
}
