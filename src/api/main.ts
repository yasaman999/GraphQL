import { ApolloServer , gql} from "apollo-server";

const typeDefs = gql`
    type Query {
        color : String!
        colors : [String!]!
        age : Int 
        score : Float
        isBlue : Boolean
        products : [Product!]!

    },
    type Product {
        name : String!
        quantity : Int!
        price : Float!

    }
`
const resolvers = {
    Query : {
        color : () => "blue",
        colors : () => ["red", "blue", "black"],
        age : () => 21,
        score : () => 31.65,
        isBlue : () => true, 
        products : () => [
            {
                name : "book",
                quantity : 10,
                price : 30.5

            },
            {
                name : "pencil",
                quantity : 9,
                price : 10.7 
            }
        ]
    }
}

const server=new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    cache: 'bounded',
    introspection: true});


server.listen().then(({url})=>{
    console.log(`🚀 Server is running on ${url}`);
});
