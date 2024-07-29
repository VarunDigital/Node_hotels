const notes = require('./notes.js')
var _ = require('lodash');

var age = notes.age;
console.log(age);

var data = [1, 2, 5, 9, 22, 43];
var filter = _.uniq(data);
console.log(filter);

var rev = _.reverse(data);
console.log(rev);
