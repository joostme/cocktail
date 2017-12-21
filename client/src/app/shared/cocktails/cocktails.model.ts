export interface Cocktail {
    id: number;
    name: string;
    description: string;
    image: string;
    ingredients: Ingredient[];
}

export interface Ingredient {
    name: string;
    amount: string;
    group: string;
}
