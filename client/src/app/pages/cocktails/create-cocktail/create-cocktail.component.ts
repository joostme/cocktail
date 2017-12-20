import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'ctl-create-cocktail',
  templateUrl: './create-cocktail.component.html',
  styleUrls: ['./create-cocktail.component.sass']
})
export class CreateCocktailComponent implements OnInit {

    cocktailForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder
    ) { }

    ngOnInit() {
        this.cocktailForm = this.formBuilder.group({
            name: ['', Validators.required],
            description: ['', Validators.required],
            image: ['', Validators.required],
            ingredients: this.formBuilder.array([ this.createIngredient(), this.createIngredient(), this.createIngredient() ])
        });
    }

    createIngredient(): FormGroup {
        return this.formBuilder.group({
            name: ['', Validators.required],
            amount: '',
            group: ['', Validators.required]
        });
    }

    addIngredient(event: Event): void {
        event.preventDefault();
        event.stopPropagation();
        const ingredients = this.cocktailForm.get('ingredients') as FormArray;
    }

    submit(event: Event) {
        event.preventDefault();
        event.stopPropagation();
        console.log(this.cocktailForm.value);
    }

}
