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

router.get('/rank/:code', (req, res) => {
    if(typeof req.params.code !== 'string') return;
    Report.find({
        event : req.params.code
    })
    .sort(
        {
            "time" : 1
        }
    )
    .then(rows => {
        const output = []
        rows.forEach(e => {
            output.push({
                name : e.name,
                phone: e.phone.slice(-4),
                time : e.time
            })
        })
        res.send(output);
    })
})


module.exports = router;
