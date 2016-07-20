'use strict';

const paperTools = () => {
  // Get reference to canvas object:
  // let canvas = document.getElementById('myCanvas');
  // Create empty project and view for the canvas:
  paper.setup('myCanvas');
  // Create a simple drawing tool:
  let tool = new Tool();
  let path;

  // Define a mousedown and mousedrag handler
  tool.onMouseDown = function(event) {
    path = new Path();
    path.strokeColor = 'black';
    path.add(event.point);
  };

  tool.onMouseDrag = function(event) {
    path.add(event.point);
  };
};

const addHandlers = () => {
  paperTools();
};

module.exports = {
  addHandlers,
};
