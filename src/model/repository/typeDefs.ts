import { ApolloServer , gql} from "apollo-server";

export const typeDefs = gql`
    type Query {
        color : String!
        colors : [String!]!
        age : Int 
        score : Float
        isBlue : Boolean
        products (filter : filterProductInput): [Product!]!
        product (id : ID!) : Product
        categories : [Category!]!
        category (id : ID!) : Category

    },
    type Product  {
        id : String!
        name : String!
        description : String!
        quantity : Int!
        price : Float!
        categoryId : String # in dakhele film nabood , khodemoon ezafe kardim
        category : Category
        onSale : Boolean!
        reviews :[Review!]
    },
    type Category {
        id : String!
        name : String!
        products (filter :filterProductInput): [Product!]!
    },
    type Review
    {
        id : String!
        title : String!
        comment : String!
        rating : Int!
        productId : String!
    }

    type Mutation 
    {
        addCategory (input : addCategoryInput) : Category!
        addProduct (input : addProductInput) : Product!
        addReview (input : addReviewInput) : Review!
        deleteCategory (id : ID!) : Boolean!
        deleteProduct (id : ID!) : Boolean!
        deleteReview (id : ID!) : Boolean!
        updateCategory (id : ID!, input : updateCategoryInput) : Category
        updateProduct (id : ID!, input : updateProductInput) : Product
    }

    input filterProductInput
    {
        onSale : Boolean,
        avgRating : Int
    }

    input addCategoryInput
    {
        name : String!
    }
     
    input addProductInput
    {
        name : String!
        description : String!
        quantity : Int!
        price : Float!
        onSale : Boolean!
        categoryId : String! 
    }

    input addReviewInput
    {
        title : String!
        comment : String!
        rating : Int!
        productId : String!
    }
    input updateCategoryInput
    {
        name : String!
    }
    input updateProductInput
    {
        name : String!
        description : String!
        quantity : Int!
        price : Float!
        onSale : Boolean!
    }
`