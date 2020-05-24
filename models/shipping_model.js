const db=require('../connection');
const shippingSchema=db.Schema({
    firstName : {
        type : String
    },
    lastName : {
        type : String
    },
    addressLine1 : {
        type : String
    },
    addressLine2 : {
        type : String
    },
    city : {
        type : String
    },
    state : {
        type : String
    },
    country : {
        type : String
    },
    date : {
        type : Date,
    },
    pinCode : {
        type : Number
    }
})

module.exports = db.model('shippingData',shippingSchema);