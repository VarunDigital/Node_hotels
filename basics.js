const os = require('os');
const fs = require('fs');

var myinfo = os.userInfo();
console.log(myinfo);

fs.appendFile('hello.txt', 'kya haal chal hain bhai', function(err){
    if (err) throw err;
    else{
        console.log('This is working');
    }
})