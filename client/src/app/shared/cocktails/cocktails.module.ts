import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CocktailsService } from './cocktails.service';
import { GraphqlModule } from '../graphql/graphql.module';

@NgModule({
    imports: [
        CommonModule,
        GraphqlModule
    ],
    providers: [
        CocktailsService
    ]
})
export class CocktailsModule {
}
