import { ApolloServer , gql} from "apollo-server";

const typeDefs = gql`
    type Query {
        color : String
    }
`
const resolvers = {
    Query : {
        color : ()=>"blue"
    }
}

const server=new ApolloServer({typeDefs,resolvers});


server.listen().then(({url})=>{
    console.log(`Server is running on ${url}`);
});