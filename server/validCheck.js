var regex = {
    phone : /^\d{3}-\d{3,4}-\d{4}$/,
    username : /^[a-z0-9_]{4,20}$/,
}

function isValid(type, data) {
    return regex[type].test(data);
}

module.exports = isValid;