import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../../../../shared/cocktails/cocktails.model';
import { testData } from '../../../../shared/cocktails/cocktails-test-data';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'ctl-cocktail-list',
    templateUrl: './cocktail-list.component.html',
    styleUrls: ['./cocktail-list.component.sass']
})
export class CocktailListComponent {

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute
    ) { }

    cocktails: Cocktail[] = testData;

    goToDetail(id: number) {
        this.router.navigate([id], { relativeTo: this.activatedRoute });
    }

    onGroupDetail(group: string) {
        this.router.navigate([''], { queryParams: { group }, relativeTo: this.activatedRoute });
    }

}
