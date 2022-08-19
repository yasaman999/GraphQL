import { ApolloServer , gql} from "apollo-server";
import { typeDefs }from "../model/repository";
import { Query } from "../model/repository/resolvers/Query";
import { Product } from "../model/repository/resolvers/Product";
import { Category } from "../model/repository/resolvers/Category";


const server=new ApolloServer({typeDefs,resolvers : {
    Query , Category , Product
}});

server.listen().then(({url})=>{
    console.log(`🚀 Server is running on ${url}`);
});
