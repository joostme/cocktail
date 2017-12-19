export interface GraphqlQuery {
    name: string;
    request: string;
    variables?: { [key: string]: any };
}
