"use strict";
let age = 21;
age = 98;
console.log(age);
const car = {
    type: "Ford"
};
car.model = 90;
console.log(car);
const ageMap = {};
ageMap.Reni = 22;
ageMap.Div = 21;
console.log(ageMap);
let list = [1, true, "oi"];
let t = list[0];
console.log(typeof (t));
var ageof;
(function (ageof) {
    ageof[ageof["Reni"] = 22] = "Reni";
    ageof[ageof["Ajin"] = 25] = "Ajin";
    ageof[ageof["Dhiv"] = 22] = "Dhiv";
    ageof[ageof["Dev"] = 22] = "Dev";
})(ageof || (ageof = {}));
let a = ageof.Ajin;
console.log(a);
const prima = { name: 'Reni', year: 2023 };
const sec = {
    dob: new Date,
    hobby: ['dance', 'sing'],
    model: 'Ford',
    details: prima
};
function data(post) {
    console.log("interface==>", post);
}
data(sec);
