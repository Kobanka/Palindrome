This is a sample NPM module created in Learn Enough JavaScript to Be Dangerous by Kobanka Anicet.

The module can be used as follows:

$ npm install --global aniss-palindrome
$ vim test.js
let Phrase = require("aniss-palindrome");
let napoleonsLament = new Phrase("Able was I, ere I saw Elba.");
console.log(napoleonsLament.palindrome());
$ node test.js
true
