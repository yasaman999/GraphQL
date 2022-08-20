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
        categoryId : String! # in dakhele film nabood , khodemoon ezafe kardim
        category : Category
        reviews :[Review!]
    },
    type Category {
        id : String!
        name : String!
        products : [Product!]!
    },
    type Review
    {
        id : String!
        title : String!
        comment : String!
        rating : Int!
        productId : String!
    }
`