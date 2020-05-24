const db=require('../connection');
const deliverySchema=db.Schema({
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
        type :date,
    },
    pinCode : {
        type : Number
    }
})

module.exports = db.model('deliverydData',deliverySchema);