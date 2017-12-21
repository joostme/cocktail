const { makeExecutableSchema } = require('graphql-tools');
const resolvers = require('./resolvers');

const typeDefs = `
    type Ingredient {
        name: String!
        amount: String
        group: String!
    }

    input IngredientInput {
        name: String!
        amount: String
        group: String!
    }

    type Cocktail {
        id: ID!,
        name: String!
        description: String!
        image: String!
        ingredients: [Ingredient!]!
    }

    input CocktailInput {
        name: String!
        description: String!
        image: String!
        ingredients: [IngredientInput!]!
    }

    type Query {
        allCocktails: [Cocktail]!
    }

    type Mutation {
        createCocktail(cocktail: CocktailInput): Cocktail!
    }
`;

module.exports = makeExecutableSchema({ typeDefs, resolvers });