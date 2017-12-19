import { NgModule, InjectionToken, ModuleWithProviders } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { GraphqlService } from './graphql.service';

export const GRAPHQL_HOST = new InjectionToken<String>('graphql.host');

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule
    ],
    providers: [
        GraphqlService
    ]
})
export class GraphqlModule {
    static forRoot(host: string): ModuleWithProviders {
        return {
            ngModule: GraphqlModule,
            providers: [
                {
                    provide: GraphqlService,
                    useClass: GraphqlService,
                    deps: [ HttpClient, GRAPHQL_HOST ]
                },
                {
                    provide: GRAPHQL_HOST,
                    useValue: host
                }
            ]
        };
    }
}
