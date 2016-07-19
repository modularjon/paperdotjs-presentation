'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

const paperEvents = require('./paper.js');

// use require without a reference to ensure a file is bundled
require('./example');

// On document ready
$(() => {
  paperEvents.addHandlers();
});
