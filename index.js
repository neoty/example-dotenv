process.env.test3 = 'no-overwrite';
const dotenv = require('dotenv');
require('dotenv').config({ path: 'test.env' });

console.log(process.env.test1);
console.log(process.env.test2);
console.log(process.env.test3);

