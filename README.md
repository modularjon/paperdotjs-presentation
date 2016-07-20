# Paper.js

<http://paperjs.org/>

## What is it?

Paper.js is vector graphics scripting framework that runs using HTML5's Canvas.
It was originally designed in reference to [Scriptographer](<https://scriptographer.org/>),
a tool built to extend Adobe Illustrator's capabilities using JavaScript. With
the advent of Adobe CS6, Scriptographer is no longer supported, but Paper.js can
now implement much of the same functionality that it's progenitor provided.

## Vector graphics? Wut?

If you aren't familiar with the difference between raster and vector graphics:
  • <https://en.wikipedia.org/wiki/Raster_graphics>
  • <https://en.wikipedia.org/wiki/Vector_graphics>

Basically raster graphics are just images described by bitmap, while vector
graphics are described using the mathematics of polygons. They are represented
by the Adobe programs Photoshop and Illustrator, respectively.

## Objectives

-   Demonstrate some of the capabilities of Paper.js, including:
-   Creating simple paths.
-   Creating a simple animation.
-   Working with polygons, circles, and path smoothing.
-   Creating simple user drawing tools.
-   Changing paper objects' styling, including color, stroke, and positioning.

## Preparation

1.  Fork and clone this repository.
1.  Create a new branch for your work.
1.  Install paper with `npm install paper`.
1.  Run grunt serve, and navigate your browser to <http://localhost:8080>.

If you run into any problems, excellent documentation is provided at
[this site](https://www.npmjs.com/package/paper). There are also instructions
for installation through a download.

## TIME FOR SOME SWEET, SWEET ART!!!

You guy's better be ready...

## Demo: Watch me make some simple shapes

The most important part of incorportating Paper.js into the system of
dependecies used at GA is requiring paper in the global scope. Paper is exposed
with a require in the root directory index.js. This allows us to access paper
anywhere within our code.

In order to get Paper to work, we need to create our first
[paper scope object](http://paperjs.org/reference/paperscope/) on document
ready. You can see in assets/scripts/index.js that the first method invoked is
paper.install(window). After this, we can then create different event handlers
that can then be called to start whatever drawing we wish to create:

• Simple line
• Rotating rectangle and smoothing
• Circles and anchor points
• A user drawing tool!
• Describing, copying and deleting styles

## Additional Resources

-   Here's a link to [Adobe CC](http://www.adobe.com/creativecloud.html)
-   HTML5 [Canvas](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas)

## [License](LICENSE)

Source code distributed under the MIT license.
