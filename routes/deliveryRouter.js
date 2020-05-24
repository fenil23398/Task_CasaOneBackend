var express = require('express');
var router = express.Router();
var delivery = require('../models/delivery_model');

router.get("/:id?", function (req, res) {
    console.log('reached inside temp router');
        delivery.find()
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
