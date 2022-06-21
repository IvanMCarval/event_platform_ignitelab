import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4olxbvs0dkd01xtbl5f23pr/master',
    cache: new InMemoryCache()
})