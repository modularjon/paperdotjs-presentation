'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

const paperSetupEvents = require('./paper/paper-setup');
// const paperRotateEvents = require('./paper/paper-rotate');
// const paperToolEvents = require('./paper/paper-tools');
// const paperMultiToolEvents = require('./paper/paper-multitools');
// const paperCircleEvents = require('./paper/paper-circle');
// const paperColorEvents = require('./paper/paper-color');
// const paperSmileyFace = require('./paper/paper-smiley-face');

// use require without a reference to ensure a file is bundled
require('./example');

// On document ready
$(() => {
  paper.install(window);
  paperSetupEvents.addHandlers();
  // paperRotateEvents.addHandlers();
  // paperToolEvents.addHandlers();
  // paperMultiToolEvents.addHandlers();
  // paperCircleEvents.addHandlers();
  // paperColorEvents.addHandlers();
  // paperSmileyFace.addHandlers();
});
