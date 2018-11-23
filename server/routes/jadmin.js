const router = require('express').Router();
const Accounts = require('../models/accounts');
const Events = require('../models/events');
const Props = require('../models/props');
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


router.post('/createProb', (req, res) => {
    if(typeof req.body.name !== "string") res.send(403);
    if(typeof req.body.code !== "string") res.send(403);
    if(typeof req.body.flag !== "string") res.send(403);
    if(typeof req.body.body !== "string") res.send(403);
    Props.create({
        title : req.body.name,
        flag : req.body.flag,
        code : req.body.code,
        description : req.body.body,
        isOpen : false,
    }).then(r => {
        res.send({
            status : true,
            message : ""
        })
    })
});

router.get('/probs', (req, res) => {
    Props.find({})
    .then(probs => {
        output = []
        probs.forEach(e => {
            output.push({
                _id  : e._id,
                title : e.title,
                body : e.description,
                isOpen : e.isOpen,
                flag : e.flag,
            })
        })
        res.send(output);
    })
});

router.get('/toggle/:id', (req, res) => {
    Props.findOne({
        _id : req.params.id
    })
    .then(prob => {
        Props.update({
            _id : req.params.id
        }, { $set : { isOpen : !prob.isOpen } })
        .then( e => {
            res.send({
                "status" : "success",
                "message" : ""
            })
        } )
    })
});

module.exports = router;
