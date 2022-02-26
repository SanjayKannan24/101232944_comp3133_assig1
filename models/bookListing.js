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
        type: String,
        required: true,
        placeholder : "mm-dd-yyyy"
    },
    booking_start : {
        type : String,
        required : true,
        placeholder : "mm-dd-yyyy"
    },
    booking_end : {
        type : String,
        required : true,
        placeholder : "mm-dd-yyyy"
    },
    username : {
        type: String,
        required: true
    }
});

const BookListing = mongoose.model("BookedListings" , BookListingSchema);
module.exports = BookListing;