import { ApolloServer , gql} from "apollo-server";
import { typeDefs ,resolvers} from "../model/repository";

const server=new ApolloServer({typeDefs,resolvers});

server.listen().then(({url})=>{
    console.log(`🚀 Server is running on ${url}`);
});
