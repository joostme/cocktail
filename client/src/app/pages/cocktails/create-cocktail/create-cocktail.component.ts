import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { AppState } from '../../../store/app-state';
import { Store } from '@ngrx/store';
import { SubmitCocktailAction } from '../../../store/cocktails/cocktails.actions';

@Component({
  selector: 'ctl-create-cocktail',
  templateUrl: './create-cocktail.component.html',
  styleUrls: ['./create-cocktail.component.sass']
})
export class CreateCocktailComponent implements OnInit {

    cocktailForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private store: Store<AppState>
    ) { }

    ngOnInit() {
        this.cocktailForm = this.formBuilder.group({
            name: '',
            description: '',
            image: '',
            ingredients: this.formBuilder.array([ this.createIngredient() ])
        });
    }

    createIngredient(): FormGroup {
        return this.formBuilder.group({
            name: '',
            amount: '',
            group: '',
        });
    }

    addIngredient(): void {
        const ingredients = this.cocktailForm.get('ingredients') as FormArray;
        ingredients.push(this.createIngredient());
    }

    submit() {
        this.store.dispatch(new SubmitCocktailAction(this.cocktailForm.value));
    }

}
