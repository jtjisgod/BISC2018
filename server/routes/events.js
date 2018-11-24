const router = require('express').Router();
const Accounts = require('../models/accounts');
const Events = require('../models/events');
const Report = require('../models/report');
const Probs = require('../models/props');
const Log = require('../models/Log');

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
    if(req.params.code === "ctf") {
        Accounts.find().sort({spendTime:-1})
        .then(rows => {
            console.log(rows);
            const output = [];
            rows.forEach(e => {
                output.push({
                    name : e.fullname,
                    phone: e.phone.slice(-4),
                    time : e.spendTime/1000
                })
            })
            res.send(output);
        })
        return;
    }
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

router.get('/probs', (req, res) => {
    Probs.find({
        isOpen : true
    })
    .then(probs => {
        output = []
        probs.forEach(e => {
            output.push({
                _id : e._id,
                title : e.title,
                body : e.description,
            })
        })
        res.send(output);
    })
});


router.post('/auth', (req, res) => {
    if(!req.session.isLogin) {
        res.send({
            "status" : false,
            "message" : "로그인을 해주세요."
        })
        return;
    }
    const id = req.body.prob;
    const flag = req.body.flag;
    if(typeof id !== 'string') {
        res.send(500);
        return;
    }
    if(typeof flag !== 'string') {
        res.send(500);
        return;
    }

    
    Log.findOne({
        prob : id,
        flag : flag,
        username : req.session.username
    })
    .then((r) => {
        if(r) {
            res.send({
                status : false,
                message : '이미 문제를 푸셨습니다.'
            })
        } else {
            Log.create({
                username : req.session.username,
                prob : id,
                flag : flag
            }).then(()=>{
                Probs.findById(id)
                .then(r => {
                    if(!r.isOpen){
                        res.send({
                            "status" : false,
                            "message" : "닫힌 문제입니다."
                        })
                        return;
                    }
                    if(r.flag === flag) {
                        // Account
                        let spendTime = Date.now() - r.openTime
                        Accounts.findOne({username:req.session.username})
                        .then(account => {
                            if(!account.spendTime) account.spendTime = 0;
                            const solved = account.solved;
                            solved.push(id);
                            Accounts.findOneAndUpdate({_id:account._id}, {$inc:{spendTime:(60 * 30 * 1000 - spendTime)},$set:{solved:solved}})
                            .then(r => {
                                res.send({
                                    "status" : true,
                                    "message" : "축하합니다."
                                })
                                // window.location.reload();
                                return;
                            })
                        })
                        return;
                    }
                    res.send({
                        "status" : false,
                        "message" : "플래그가 아닙니다."
                    })
                })    
            })        
        }
    })
})

module.exports = router;
