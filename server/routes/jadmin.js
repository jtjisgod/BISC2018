const router = require('express').Router();
const Accounts = require('../models/accounts');
const Events = require('../models/events');
const ValidCheck = require("../validCheck");
const Util = require("../util");

function isJadmin(req) {
    if(!req.session.isLogin) {
        return false;
    }
    return req.session.username === "jtjisgod";
}

router.use((req, res, next) => {
    if(!isJadmin(req)) {
        res.send({
            "status" : false,
            "message" : "Only JTJ"
        })
        return;
    }
    next();
})

router.post('/createEvent', (req, res) => {
    if(typeof req.body.name !== "string") res.send(403);
    if(typeof req.body.code !== "string") res.send(403);
    Events.create({
        name : req.body.name,
        code : req.body.code
    }).then(r => {
        res.send({
            status : true,
            message : ""
        })
    })
});

module.exports = router;
