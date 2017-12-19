import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CocktailsService } from './cocktails.service';
import { GraphqlModule } from '../graphql/graphql.module';
import { environment } from '../../../environments/environment';

@NgModule({
    imports: [
        CommonModule,
        GraphqlModule.forRoot(environment.remoteHost)
    ],
    providers: [
        CocktailsService
    ]
})
export class CocktailsModule {
}
