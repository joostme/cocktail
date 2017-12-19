import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ctl-cocktails-page',
  templateUrl: './cocktails-page.component.html',
  styleUrls: ['./cocktails-page.component.sass']
})
export class CocktailsPageComponent {

  constructor() { }

  onSearch(searchString: string) {
      console.log(searchString);
  }

}
