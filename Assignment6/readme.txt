Assignment 6
NUID: 002998254

-------- SASS/SCSS Features used -----------

Variables, Custom Properties- 
- declared variables for color and fonts in _config.scss, used in style.scss in multiple places like nav, main etc
- calculated half value in animateBounce function in _animate.scss

Placeholder selectors-
- used in style.scss to define the properties of the footer element

Nesting-
- nested properties in style.scss container, main and sidebar classes
- used in hamb and sidemenu in _nav.scss

Interpolation- 
- used Interpolation in _animation.scss for animating arrows in animateBounce function

Mixins- 
- used mixin for color theme in _config.scss in utilities for spacing and animation

Functions-
- created returnHalf function in _animate.scss to return half value of distance
- created set-text-color function to set text color

Inheritance-
- inheriting properties of .container into .main in style.scss

Modules-
- loading _config.scss file as a module in _table.scss to reuse the variables 

Operators-
- used in style.scss to use $font-size variable to define different font sizes for heading tags

------------------- Files ----------------

about - styling for about page
table - table styling
animate - to declare animations
button - declare button Properties
config - color config
media - media queries for responsiveness
nav - top navigation bar
utilities - spacing utilities