'use strict';

const paperRotate = () => {
  // Get reference to canvas object:
  // let canvas = document.getElementById('myCanvas');
  // Create empty project and view for the canvas:
  paper.setup('myCanvas');
  // Create a Paper.js Path to draw rectangle:
  let path = new Path.Rectangle([75, 75], [100, 100]);
  // Give the stroke a color:
  path.strokeColor = 'black';

  // path.smooth({ type: 'catmull-rom', factor: 0.2 });

  // view.onFrame = function(event) {
  //   // On each frame, rotate the path by 3 degrees:
  //   path.rotate(3);
  // };
};

const addHandlers = () => {
  paperRotate();
};

module.exports = {
  addHandlers,
};
