import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Cocktail } from '../../../../../shared/cocktails/cocktails.model';

@Component({
    selector: 'ctl-list-item',
    templateUrl: './list-item.component.html',
    styleUrls: ['./list-item.component.sass']
})
export class ListItemComponent {

    @Input()
    cocktail: Cocktail;

    @Output()
    onDetail: EventEmitter<number> = new EventEmitter();

    @Output()
    onGroupDetail: EventEmitter<string> = new EventEmitter();

    goToDetail() {
        this.onDetail.emit(this.cocktail.id);
    }

    addToFavorites(event: Event) {
        event.preventDefault();
        event.stopPropagation();
    }

    goToGroup(name: string, event: Event) {
        event.preventDefault();
        event.stopPropagation();
        this.onGroupDetail.emit(name);
    }

}
