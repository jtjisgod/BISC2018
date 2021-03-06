const Axios = require('axios');

const Obj = {
    url : "http://127.0.0.1:8080"
}

Obj.check = Obj.url + "/accounts";
Obj.register = Obj.url + "/accounts/create";
Obj.login = Obj.url + "/accounts/login";
Obj.logout = Obj.url + "/accounts/logout";
Obj.isAdmin = Obj.url + "/accounts/isAdmin";
Obj.isJadmin = Obj.url + "/accounts/isJadmin";
Obj.jadminEventCreate = Obj.url + "/jadmin/createEvent";
Obj.events = Obj.url + "/events"
Obj.eventsReport = Obj.url + "/admin/report";
Obj.rank = Obj.url + "/events/rank/";
Obj.jadminProbCreate = Obj.url + "/jadmin/createProb";
Obj.jadminProbs = Obj.url + "/jadmin/probs";
Obj.Probs = Obj.url + "/events/probs";
Obj.jadminProbToggle = Obj.url + "/jadmin/toggle/";
Obj.auth = Obj.url + "/events/auth"
// Obj.check = Obj.url + "/events/check/"

Obj.axios = Axios.create({
    baseURL: Obj.url,
    withCredentials: true
})

module.exports = Obj
