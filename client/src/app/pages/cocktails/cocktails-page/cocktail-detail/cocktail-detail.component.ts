import { Component, OnInit } from '@angular/core';
import { testData } from '../../../../shared/cocktails/cocktails-test-data';
import { Cocktail } from '../../../../shared/cocktails/cocktails.model';
import { Router } from '@angular/router';

@Component({
    selector: 'ctl-cocktail-detail',
    templateUrl: './cocktail-detail.component.html',
    styleUrls: ['./cocktail-detail.component.sass']
})
export class CocktailDetailComponent {

    constructor(
        private router: Router
    ) { }

    cocktail: Cocktail = testData[0];

    goToGroup(name: string) {
        this.router.navigate(['groups', name]);
    }
}
