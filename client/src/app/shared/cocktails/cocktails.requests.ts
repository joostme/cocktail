import { GraphqlQuery } from '../graphql/graphql-query.model';

export const allCocktailsQuery: GraphqlQuery = {
    name: 'allCocktails',
    request: `{
        name,
        description,
        image,
        ingredients {
          name,
          amount,
          group
        }
    }`
};

