'use strict';

// How can we construct a smiley face?
const paperSmileyFace = () => {
  // Get reference to canvas object:
  // let canvas = document.getElementById('myCanvas');
  // Create empty project and view for the canvas:
  paper.setup('myCanvas');

  let smiley = new Path.Circle([200, 200], 100);

  let smileyEyeLeft = new Path.Circle([165, 175], 20);

  let smileyStyle = {
    strokeColor: 'black',
    fillColor: 'yellow',
    strokeWidth: 15
  };

  let smileyEyeStyle = {
    strokeColor: 'black',
    fillColor: 'black'
  };

  let smileyMouthStyle = {
    strokeColor: 'black',
    strokeWidth: 20
  };

  smiley.style = smileyStyle;

  smileyEyeLeft.style = smileyEyeStyle;

  smileyEyeLeft.fullySelected = true;

  let smileyEyeRight = smileyEyeLeft.clone();

  smileyEyeRight.fullySelected = true;
  smileyEyeRight.position.x += 70;

  smileyEyeLeft.fullySelected = false;
  smileyEyeRight.fullySelected = false;

  let smileyMouth = new Path(new Point([160, 240]), new Point([240, 240]));

  smileyMouth.style = smileyMouthStyle;

  // Draw the view now:
  view.draw();
};

const addHandlers = () => {
  paperSmileyFace();
};

module.exports = {
  addHandlers,
};
