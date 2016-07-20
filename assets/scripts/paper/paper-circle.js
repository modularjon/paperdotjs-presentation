'use strict';

const paperCircle = () => {
  // Get reference to canvas object:
  // let canvas = document.getElementById('myCanvas');
  // Create empty project and view for the canvas:
  paper.setup('myCanvas');
  // Create a Paper.js Path to draw a circle:
  let circle = new Path.Circle(new Point(100, 75), 50);
  // Give the stroke a color:
  circle.strokeColor = 'black';

  // Select the circle, and delete an anchor point:
  // circle.selected = true;
  // circle.removeSegment(0);
  // circle.fullySelected = true;

  // Now we can try deleting the whole circle
  // circle.remove();

  // Draw the view now:
  view.draw();
};

const addHandlers = () => {
  paperCircle();
};

module.exports = {
  addHandlers,
};
