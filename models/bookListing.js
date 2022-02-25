const mongoose = require("mongoose");

const BookListingSchema = new mongoose.Schema({
    listing_id : {
        type: String,
        required: true
    },
    booking_id : {
        type: String,
        required: true
    },
    booking_date : {
        type: Date,
        required: true
    },
    booking_start : {
        type : Date,
        required : true
    },
    booking_end : {
        type : Date,
        required : true
    },
    username : {
        type: String,
        required: true
    }
});

const BookListing = mongoose.model("BookedListings" , BookListingSchema);
module.exports = BookListing;