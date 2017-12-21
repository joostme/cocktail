import gql from 'graphql-tag';
import { GraphqlRequest } from './graphql-request.model';

export const allCocktailsQuery: GraphqlRequest = {
    name: 'allCocktails',
    gql:     gql`
    query {
        allCocktails {
            id,
            name,
            description,
            image,
            ingredients {
                name
                amount
                group
            }
        }
    }`
};


export const submitCocktailMutation: GraphqlRequest = {
    name: 'createCocktail',
    gql: gql`
    mutation createCocktail($cocktail: CocktailInput!) {
        createCocktail(cocktail: $cocktail) {
        id
        name
        description
        image
        ingredients {
            name
            amount
            group
        }
        }
    }
`
};

