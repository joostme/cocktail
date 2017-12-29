import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Cocktail } from '../../../../shared/cocktails/cocktails.model';

@Component({
    selector: 'ctl-list-item',
    templateUrl: './list-item.component.html',
    styleUrls: ['./list-item.component.sass']
})
export class ListItemComponent {

    @Input()
    cocktail: Cocktail;

    @Input()
    favorite: boolean;

    @Output()
    onDetail: EventEmitter<Cocktail> = new EventEmitter();

    @Output()
    onGroupDetail: EventEmitter<string> = new EventEmitter();

    @Output()
    onAddToFavorites: EventEmitter<Cocktail> = new EventEmitter();

    @Output()
    onRemoveFromFavorites: EventEmitter<Cocktail> = new EventEmitter();

    goToDetail() {
        this.onDetail.emit(this.cocktail);
    }

    addToFavorites(event: Event) {
        event.preventDefault();
        event.stopPropagation();
        this.onAddToFavorites.emit(this.cocktail);
    }

    removeFromFavorites(event: Event) {
        event.preventDefault();
        event.stopPropagation();
        this.onRemoveFromFavorites.emit(this.cocktail);
    }

    goToGroup(name: string, event: Event) {
        event.preventDefault();
        event.stopPropagation();
        this.onGroupDetail.emit(name);
    }

}
