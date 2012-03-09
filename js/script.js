/**
 * Scripts for ChemWriters
 */

(function () { /* File Scope */

/**
 * Pick from a rotating set of colors each time the page is loaded.
 */

  _COLORS = [ '#fdd5d8', '#e3f3fc', '#c6f9e3', '#ccc', '#fdfae2' ];

  // Run this upon loading
  $(function () {
   var cix;

   // Determine a random color index
   cix = Math.floor(Math.random() * _COLORS.length);

   // Apply the color
   $('header').css('background', _COLORS[cix]);
  });


})(); /* END File Scope */


/* vi: ts=2 sts=2 sw=2 et:
 */


