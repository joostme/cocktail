import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Cocktail } from './cocktails.model';
import { Apollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { allCocktailsQuery, submitCocktailMutation } from './cocktails.requests';
import { environment } from '../../../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class CocktailsService {

    constructor(
        private apollo: Apollo,
        private httpLink: HttpLink
    ) {
        apollo.create({
            link: httpLink.create({ uri: environment.remoteHost}),
            cache: new InMemoryCache()
        });
    }

    getAllCocktails(): Observable<Cocktail[]> {
        return this.apollo.query({ query: allCocktailsQuery.gql, fetchPolicy: 'network-only'})
            .map(response => response.data[allCocktailsQuery.name]);
    }

    submit(cocktail: Partial<Cocktail>): Observable<Cocktail> {
        return this.apollo.mutate({
            mutation: submitCocktailMutation.gql,
            variables: {
                cocktail
            }
        })
        .map(response => response.data[submitCocktailMutation.name]);
    }
}
