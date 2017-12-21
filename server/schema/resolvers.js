const cocktails = [
    {
        id: 1,
        name: 'Gin & Tonic',
        description: 'Best cocktail evaa!',
        image: 'http://image.jpeg',
        ingredients: [
            {
                name: "Gin",
                amount: "4-6 CL",
                group: "Gin"
            },
            {
                name: "Tonic Water",
                amount: null,
                group: "Tonic"
            },
        ]
    }
];

module.exports = {
    Query: {
        allCocktails: () => cocktails,
    },
    Mutation: {
        createCocktail(_, data) {
            const newCocktail = Object.assign({ id: cocktails.length + 1 }, data.cocktail);
            cocktails.push(newCocktail);
            return newCocktail;
        }
    }
};