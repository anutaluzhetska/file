const fs = require('fs');

const book =fs.readFileSync(
    './book.txt',
    {
        encoding: 'utf8',
        flag: 'r'
    }
);
console.log(book.replace(/[\' ']/ig, 'Anna Luzhetska'));
