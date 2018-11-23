const router = require('express').Router();
const Events = require('../models/events');
const Report = require('../models/report');

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
