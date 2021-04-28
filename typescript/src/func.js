function add(x, y) {
    return x + y;
}
var myAdd = function (x, y) {
    return x + y;
};
function buildName(firstName, lastName) {
    var fullName = firstName;
    if (lastName) {
        fullName = fullName + ' ' + lastName;
    }
    return fullName;
}
function defaultName(firstName, lastName) {
    if (lastName === void 0) { lastName = 'Jackson'; }
    return firstName + ' ' + lastName;
}
function restName(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + ' ' + restOfName.join(' ');
}
