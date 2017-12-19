import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GraphqlQuery } from './graphql-query.model';
import { Observable } from 'rxjs/Observable';
import { GraphqlResponse } from './graphql-response.model';
import { isUndefined } from 'lodash';

@Injectable()
export class GraphqlService {

    constructor(
        private httpClient: HttpClient,
        private host: string
    ) { }

    query<T>(query: GraphqlQuery): Observable<T> {
        return this.httpClient.post<GraphqlResponse>(this.host, this.transformQuery(query))
            .map(response => response.data[query.name]);
    }

    private transformQuery(query: GraphqlQuery) {
        return {
            query: `query { ${query.name} ${query.request} }`,
            variables: isUndefined(query.variables) ? null : query.variables
        };
    }
}
