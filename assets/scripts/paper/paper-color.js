'use strict';

const paperColor = () => {
  // Get reference to canvas object:
  // let canvas = document.getElementById('myCanvas');
  // Create empty project and view for the canvas:
  paper.setup('myCanvas');
  // Create a Paper.js Path to draw a line into it:
  let path = new Path({
  	segments: [[40, 115], [80, 180], [200, 20]],
  	selected: false
  });
  // Give the stroke a color:
  path.strokeColor = 'black';
  // path.strokeColor = '#ff7e00';

  // Now we can change teh color using a Color object:
  // path.strokeColor = new Color(0.5, 0, 0.5);

  // What color should we fill it with?
  // path.fillColor = '#ff0000';

  // Lets give it some boldness:
  // path.strokeWidth = 20;

  // Copying styles? No problem:
  // let circle = new Path.Circle({
  // 	center: [160, 50],
  // 	radius: 35
  // });
  // circle.strokeColor = 'black';
  // circle.position.x += 150;
  // circle.position.y += 50;

  // Get ready:
  // circle.style = path.style;

  // Or how about this:
  // let killerStyle = {
  //   strokeColor: '#2197ce',
  //   fillColor: '#21ceaf',
  //   strokeWidth: 5
  // };

  // circle.style = killerStyle;

  // Time to end the fun:
  // path.fillColor = null;

  // Draw the view now:
  view.draw();
};

const addHandlers = () => {
  paperColor();
};

module.exports = {
  addHandlers,
};
