import Axios from 'axios'

const Obj = {}

Obj.axios = Axios.create({
    baseURL: Obj.url,
    withCredentials: true
})

Obj.passwordSalt = "##@@P4ssw0rdS0rt!@@##"

module.exports = Obj