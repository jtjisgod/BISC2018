const Axios = require('axios');

const Obj = {
    url : "http://127.0.0.1:8080"
}

Obj.check = Obj.url + "/accounts";
Obj.register = Obj.url + "/accounts/create";

Obj.axios = Axios.create({
    baseURL: Obj.url,
    withCredentials: true
})

module.exports = Obj