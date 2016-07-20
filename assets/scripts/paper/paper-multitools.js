'use strict';

const paperMultiTools = () => {
  // Get reference to canvas object:
  // let canvas = document.getElementById('myCanvas');
  // Create empty project and view for the canvas:
  paper.setup('myCanvas');

  // Create two drawing tools.
  // tool1 will draw straight lines,
  // tool2 will draw clouds.

  // Both share the mouseDown event:
  let path;
  function onMouseDown(event) {
    path = new Path();
    path.strokeColor = 'black';
    path.add(event.point);
  }

  tool1 = new Tool();
  tool1.onMouseDown = onMouseDown;

  tool1.onMouseDrag = function(event) {
    path.add(event.point);
  };

  tool2 = new Tool();
  tool2.minDistance = 20;
  tool2.onMouseDown = onMouseDown;

  tool2.onMouseDrag = function(event) {
    // Use the arcTo command to draw cloudy lines
    path.arcTo(event.point);
  };
};

const addHandlers = () => {
  paperMultiTools();
  // $('.lines').on('click', tool1.activate());
  // $('.clouds').on('click', tool2.activate());
};

module.exports = {
  addHandlers,
};
