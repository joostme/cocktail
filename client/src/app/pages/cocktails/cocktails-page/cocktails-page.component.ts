import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Cocktail } from '../../../shared/cocktails/cocktails.model';
import { CocktailsService } from '../../../shared/cocktails/cocktails.service';

@Component({
    selector: 'ctl-cocktails-page',
    templateUrl: './cocktails-page.component.html',
    styleUrls: ['./cocktails-page.component.sass']
})
export class CocktailsPageComponent {

    cocktails: Observable<Cocktail[]>;

    constructor(
        private cocktailsService: CocktailsService
    ) {
        this.cocktails = cocktailsService.getAllCocktails();
    }

    onSearch(searchString: string) {
        console.log(searchString);
    }

}
