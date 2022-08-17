import { ApolloServer , gql} from "apollo-server";

export const typeDefs = gql`
    type Query {
        color : String!
        colors : [String!]!
        age : Int 
        score : Float
        isBlue : Boolean
        products : [Product!]!
        product (id : ID!) : Product
        categories : [Category!]!
        category (id : ID!) : Category

    },
    type Product {
        id : String!
        name : String!
        description : String!
        quantity : Int!
        price : Float!

    },
    type Category {
        id : String!
        name : String!
    }
`