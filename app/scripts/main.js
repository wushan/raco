//Browserify
//Require
const $ = require('./jquery.min');
const custom = require('./custom-mod');
const customb = require('./custom-modB');

//Do Something.
$('body').append('<h1>Jquery Required.</h1>');

custom.doA();
customb();