'use strict';

// How can we construct a smiley face?
const paperSmileyFace = () => {
  // Get reference to canvas object:
  // let canvas = document.getElementById('myCanvas');
  // Create empty project and view for the canvas:
  paper.setup('myCanvas');

  // Draw the view now:
  view.draw();
};

const addHandlers = () => {
  paperSmileyFace();
};

module.exports = {
  addHandlers,
};
