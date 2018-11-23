const router = require('express').Router();
const Accounts = require('../models/accounts');
const ValidCheck = require("../validCheck");
const Util = require("../util");

router.get('/', (req, res) => {
    res.send({
        "status" : req.session.isLogin ? true : false,
    })
})

router.get('/isAdmin', (req, res) => {
    if(!req.session.isLogin) {
        res.send({
            status : false
        });
        return;
    }
    res.send({
        status : req.session.isAdmin
    })
});

router.get('/isJadmin', (req, res) => {
    if(!req.session.isLogin) {
        res.send({
            status : false
        });
        return;
    }
    res.send({
        status : req.session.username === "jtjisgod"
    })
});

router.post('/create', (req, res) => {

    if(typeof req.body.username !== 'string') return;
    if(typeof req.body.password !== 'string') return;
    if(typeof req.body.fullname !== 'string') return;
    if(typeof req.body.phone !== 'string') return;

    var username = req.body.username.trim();
    var password = req.body.password.trim();
    var fullname = req.body.fullname.trim();
    var phone    = req.body.phone.trim();

    if(!username, !password, !fullname, !phone) {
        res.send({
            "status" : false,
            "message" : "올바르지 않은 데이터가 있습니다."
        })
        return;
    }

    if(!ValidCheck("username", username)) {
        res.send({
            "status" : false,
            "message" : "4~20자의 영소문자와 숫자, _ 조합으로 만들어주세요."
        })
        return;
    }

    if(!ValidCheck("phone", phone)) {
        res.send({
            "status" : false,
            "message" : "핸드폰 번호는 010-1111-2222 형식으로 만들어주세요."
        })
        return;
    }

    password = Util.passwordHash(password)

    Accounts.findOne({username: username})
    .then(account => {

        if(account) {
            res.send({
                status : false,
                message : "이미 존재하는 아이디입니다."
            })
            return;
        }

        Accounts.create({
            username : username, 
            password : password,
            fullname : fullname,
            phone : phone
        })
        .then(function() {
            res.send({
                status : true,
                message : "회원가입에 성공하였습니다."
            });
        })
        .catch(function(err) {
            console.log(err);
            res.status(500).send({
                status : false,
                message : "에러가 발생하였습니다."
            });
        })
    })
    .catch(function(err) {
        console.log(err);
        res.status(500).send({
            status : false,
            message : "에러가 발생하였습니다."
        });
        return;
    })
});

router.post('/login', function(req, res) {

    if(typeof req.body.username !== 'string') return;
    if(typeof req.body.password !== 'string') return;

    var username = req.body.username.trim()
    var password = req.body.password.trim()

    password = Util.passwordHash(password)

    Accounts.findOne({
        username: username,
        password: password
    }).then(function(account) {
        if(account === null) {
            res.send({
                status : false,
                message : "로그인에 실패하였습니다."
            })
            return;
        }
        req.session.isLogin = true;
        req.session.username = username;
        req.session.isAdmin = account.isAdmin;
        res.send({
            status : true,
            message : "로그인에 성공하였습니다."
        })
    }).catch(function(err) {
        console.log(err);
        res.status(500).send({
            status : false,
            message : "에러가 발생하였습니다."
        });
    })
});

router.get("/logout", function(req, res) {
    req.session.destroy();
    res.send({
        status : true,
        message : ""
    })
});

module.exports = router;
