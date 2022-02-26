var { buildSchema } = require("graphql");

exports.schema = buildSchema (`
    type User {
        username : String!
        firstname : String!
        lastname : String!
        password : String!
        email : String!
        type : String!
    },

    type Listing {
        listing_id : String!
        listing_title : String!
        description : String!
        street : String!
        city : String!
        postal_code : String!
        price : Int!
        email : String!
        username : String!
    },

    type Booking {
        listing_id : String!
        booking_id : String!
        booking_date : String!
        booking_start : String!
        booking_end : String!
        username : String!
    },

    type Query {
        login(
            username: String! 
            password: String!
            type : String!): [Listing]
        
        viewListings : [Listing]

        searchByName(username : String!) : [Listing]

        searchByCityandPostalCode(
            city : String!
            postal_code : String!): [Listing]

        viewBookings : [Booking]
    },

    type Mutation {
        addUser (
            username : String!
            firstname : String!
            lastname : String!
            password : String!
            email : String!
            type : String!
        ):User

        createListing (
            listing_id : String!
            listing_title : String!
            description : String!
            street : String!
            city : String!
            postal_code : String!
            price : Int!
            email : String!
            username : String!
        ): Listing

        bookListing (
            listing_id : String!
            booking_id : String!
            booking_date : String!
            booking_start : String!
            booking_end : String!
            username : String!
        ): Booking
    }
`)
