const router = require('express').Router();
const Events = require('../models/events');

router.get('/', (req, res) => {
    Events.find({})
    .then(r => {
        const a = [];
        r.forEach(e => {
            a.push({
                code : e.code,
                name : e.name
            })
        })
        res.send({
            status : true,
            data : a
        });
    })
})

module.exports = router;
