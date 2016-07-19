'use strict';

const paper = require('paper');

const onPageReady = () => {
  // Get reference to canvas object:
  let canvas = document.getElementById('myCanvas');
  // Create empty project and view for the canvas:
  paper.setup(canvas);
  // Create a Paper.js Path to draw a line into it:
  let path = new paper.Path();
  // Give the stroke a color:
  path.strokeColor = 'black';
  let start = new paper.Point(100, 100);
  // Move to start and draw a line from there:
  path.moveTo(start);
  // Note the plus operator on Point objects.
  // PaperScript does that for us, and much more!

  // Note that the plus operator on Point objects does not work
	// in JavaScript. Instead, we need to call the add() function:
  path.lineTo(start.add([ 100, -50 ]));
  // Draw the view now:
  paper.view.draw();
};

const addHandlers = () => {
  onPageReady();
};

module.exports = {
  addHandlers,
};
