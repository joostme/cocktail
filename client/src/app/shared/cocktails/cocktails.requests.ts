import { GraphqlQuery } from '../graphql/graphql-query.model';

export const allCocktailsQuery: GraphqlQuery = {
    name: 'allCocktails',
    request: `{
        id,
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

