import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'ctl-cocktail-search',
    templateUrl: './cocktail-search.component.html',
    styleUrls: ['./cocktail-search.component.sass']
})
export class CocktailSearchComponent {

    @ViewChild('searchInput')
    searchInput: ElementRef;

    @Output()
    onSearch: EventEmitter<string> = new EventEmitter();

    constructor() { }

    search(event: Event) {
        event.preventDefault();
        this.onSearch.emit(this.searchInput.nativeElement.value.trim());
    }
}
