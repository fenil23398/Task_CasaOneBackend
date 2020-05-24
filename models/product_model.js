const db=require('../connection');
const productSchema=db.Schema({
    productId : {
        type : Number
    },
    productName : {
        type : String
    },
    qty : {
        type : Number
    },
    price : {
        type : Number
    },
    notes : {
        type : String
    }
})

module.exports = db.model('productData',productSchema);