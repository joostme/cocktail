export interface Cocktail {
    name: string;
    description: string;
    ingredients: Ingredient[];
}

export interface Ingredient {
    type: string;
    amount: string;
}
