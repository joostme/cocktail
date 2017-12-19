const { makeExecutableSchema } = require('graphql-tools');
const resolvers = require('./resolvers');

const typeDefs = `
    type Group {
        id: ID!
        name: String!
    }

    type Ingredient {
        id: ID!
        name: String!
        amount: String
        group: Group!
    }

    type Cocktail {
        id: ID!
        name: String!
        description: String!
        image: String!
        ingredients: [Ingredient!]!
    }

    type Query {
        allCocktails: [Cocktail]!
    }
`;

module.exports = makeExecutableSchema({ typeDefs, resolvers });