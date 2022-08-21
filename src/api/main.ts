import { ApolloServer , gql} from "apollo-server";
import { typeDefs }from "../model/repository";
import { Query } from "../model/repository/resolvers/Query";
import { Product } from "../model/repository/resolvers/Product";
import { Category } from "../model/repository/resolvers/Category";
import { Mutation } from "../model/repository/resolvers/Mutation";
import { products } from "../model/DB/products"
import { categories } from "../model/DB/categories";
import { reviews } from "../model/DB/reviews";
const server=new ApolloServer({typeDefs,resolvers : {
    Query , Category , Product , Mutation } ,
    context :{
        products , categories , reviews
    }
});

server.listen().then(({url})=>{
    console.log(`🚀 Server is running on ${url}`);
});
