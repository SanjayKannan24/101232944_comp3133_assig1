var { buildSchema } = require("graphql");

exports.schema = buildSchema(`
    type User {
        username : String!
        firstname : String!
        lastname : String!
        password : String!
        email : String!
        type : String!
    }

    type CreateListing {
        listing_id : String!
        listing_title : String!
        description : String!
        street : String!
        city : String!
        postal_code : String!
        price : Int!
        email : String!
        username : String!
    }

    type BookListing {
        listing_id : String!
        booking_id : String!
        booking_date : String!
        booking_Start : String!
        booking_end : String!
        username : String!
    }

    type Query {
        login(username : String! , password : String!): User
        message: String
    }
`)
