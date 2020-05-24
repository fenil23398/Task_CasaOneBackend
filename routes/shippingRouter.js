var express = require('express');
var router = express.Router();
var shipping = require('../models/shipping_model');

router.get("/:id?", function (req, res) {
    console.log('reached inside shipping router');
        shipping.find({})
        .then(data => {
            console.log("Inside Success data Fetched ",data);
            res.json(data)
        })
        .catch(err =>{
            console.log("Error In Fetching DeliveryData ",err)
            res.json(err);
        })
})

module.exports = router;
