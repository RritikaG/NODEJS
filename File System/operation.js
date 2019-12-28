var fs = require('fs');
//
// // fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
// //     if (err) throw err;
// //     console.log('Saved!');
// // });

fs.appendFile('mynewfile1.txt', ' This is my text.', function (err) {
    if (err) throw err;
    console.log('Updated!');
});

// var fs = require('fs');
//
// fs.writeFile('mynewfile1.txt', 'This is text', function (err) {
//     if (err) throw err;
//     console.log('Replaced!');
// });
//
// var fs = require('fs');
//
// fs.open('mynewfile2.txt', 'w', function (err, file) {
//     if (err) throw err;
//     console.log('Saved!');
// });
