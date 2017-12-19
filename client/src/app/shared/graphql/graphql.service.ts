import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GraphqlQuery } from './graphql-query.model';
import { Observable } from 'rxjs/Observable';
import { GraphqlResponse } from './graphql-response.model';

@Injectable()
export class GraphqlService {

    constructor(
        private httpClient: HttpClient
    ) { }

    query<T>(host: string, query: GraphqlQuery): Observable<T> {
        return this.httpClient.post<GraphqlResponse>(host, this.transformQuery(query))
            .map(response => response.data[query.name]);
    }

    private transformQuery(query: GraphqlQuery) {
        return {
            query: `query { ${query.name} ${query.request} }`
        };
    }
}