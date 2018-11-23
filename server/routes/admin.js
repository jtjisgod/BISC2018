const router = require('express').Router();
const Report = require('../models/report');
const Accounts = require('../models/accounts');
const Events = require('../models/events');
const ValidCheck = require("../validCheck");
const Util = require("../util");

function isAdmin(req) {
    if(!req.session.isLogin) {
        return false;
    }
    return req.session.isAdmin ? true : false;
}

router.use((req, res, next) => {
    if(!isAdmin(req)) {
        res.send({
            "status" : false,
            "message" : "Only Admin"
        })
        return;
    }
    next();
})

router.post('/report', (req, res) => {
    if(typeof req.body.name !== 'string') return;
    if(typeof req.body.phone !== 'string') return;
    if(typeof req.body.category !== 'string') return;
    if(typeof req.body.time !== 'string') return;
    const name = req.body.name;
    const phone = req.body.phone;
    const event = req.body.category;
    const time = parseInt(req.body.time);
    if(!ValidCheck('phone', phone)) {
        res.send({
            "status" : false,
            "message" : "핸드폰 번호는 010-0000-0000 형식으로 해주세요."
        })
        return;
    }
    Report.deleteMany({
        "phone" : phone,
        "event" : event
    }).then((e)=> {
        Report.create({
            name : name,
            phone : phone,
            event : event,
            time : time
        })
        .then(() => {
            res.send({
                "status" : true,
                "message" : "'"
            })
        })
        .catch((e) => {
            console.log(e);
            res.send(500);
        });
    })
    .catch((e) => {
        console.log(e);
        res.send(500);
    });
})


module.exports = router;
