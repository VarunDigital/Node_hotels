// function add(a, b){
//     return a+b;
// }

// var a = add(5, 6);
// console.log(a);

// var add = function(a, b){
//     return a+b;
// }
// var res = add(444, 453);
// console.log(res);

// var add = (a, b) => {
//     return a+b;
// }
// var res = add(444, 453);
// console.log(res);


// Call back function

function me(name){
    console.log("I am Varun");
}

function add(a, b, me){
    var res = a+b;
    console.log(res);
    me();
}

add(3, 4, me);