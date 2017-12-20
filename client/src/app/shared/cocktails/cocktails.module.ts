import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CocktailsService } from './cocktails.service';
import { ApolloModule } from 'apollo-angular';
import { HttpLinkModule } from 'apollo-angular-link-http';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        ApolloModule,
        HttpLinkModule
    ],
    providers: [
        CocktailsService
    ]
})
export class CocktailsModule {
}
