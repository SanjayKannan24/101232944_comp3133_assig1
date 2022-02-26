var User = require("../models/user");
var Listing = require("../models/createListing");
var Booking = require("../models/bookListing");

exports.resolver = {
    //Query
    login: (args) => {
        if(User.find({
            "username" : args.username , "password" : args.password , "type" : args.type})){
            if(args.type == "admin"){
                return Listing.find({"username" : args.username});
            }
            else{
                return Booking.find({"username" : args.username})
            } 
        }
        


    },
    viewListings: () => {
        console.log(Listing.find({}))
        return Listing.find({});
    },
    searchByName: (args) => {
        return Listing.find({"username" : args.username});
    },
    searchByCityandPostalCode: (args) => {
        return Listing.find({
            "city" : args.city,
            "postal_code" : args.postal_code
        });
    },
    




    //Mutation
    addUser: (args) => {
        let newUser = new User({
            username : args.username,
            firstname : args.firstname,
            lastname : args.lastname,
            password : args.password,
            email : args.email,
            type : args.type
        });
        return newUser.save();
    },

    createListing: (args) => {
        let newListing = new Listing({
            listing_id : args.listing_id,
            listing_title : args.listing_title,
            description : args.description,
            street : args.street,
            city : args.city,
            postal_code : args.postal_code,
            price : args.price,
            email : args.email,
            username : args.username,
        });

        return newListing.save();

        
    },

    bookListing: (args) => {
        let newBooking = new Booking({
            listing_id : args.listing_id,
            booking_id : args.booking_id,
            booking_date : args.booking_date,
            booking_start : args.booking_start,
            booking_end : args.booking_end,
            username : args.username
        });
        return newBooking.save();
    }
}