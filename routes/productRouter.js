var express = require('express');
var router = express.Router();
var products = require('../models/product_model');

router.get("/:id?", function (req, res) {
    console.log('reached inside Product router');
        products.find({})
        .then(data => {
            console.log("Inside Success data Fetched ",data);
            res.json(data)
        })
        .catch(err =>{
            console.log("Error In Fetching DeliveryData ",err)
            res.json(err);
        })
 
        // products.find(function (err, docs) {
        //     if (err) {
        //         res.json(err);
        //     } else {
        //         res.json(docs);
        //     }
        // });
})

module.exports = router;
