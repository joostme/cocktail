const cocktails = [
    {
      id: 1,
      name: 'Gin & Tonic',
      description: 'Best cocktail evaa!',
      image: 'http://image.jpeg',
      ingredients: [
          {
              id: 127,
              name: "Gin",
              amount: "4-6 CL",
              group: {
                  id: 234,
                  name: "Gin"
              }
          },
          {
              id: 128,
              name: "Tonic Water",
              amount: null,
              group: {
                  id: 2356,
                  name: "Tonic"
              }
          },
      ]
    }
  ];
  
  module.exports = {
    Query: {
      allCocktails: () => cocktails,
    }
  };