/**
 * Scripts for ChemWriters
 */

(function () { /* File Scope */

/**
 * Pick from a rotating set of colors each time the page is loaded.
 */

  //_COLORS = [ '#fdeded', '#e3f3fc', '#c6f9e3', '#ccc', '#fdfae2' ];
  _COLORS = [ '#fde5e3', '#e7f7fc', '#ecf8f1', '#ccc', '#fdfae2' ];

  // Run this upon loading
  $(function () {
   var cix;

   // Determine a random color index
   cix = Math.floor(Math.random() * _COLORS.length);

   // Apply the color
   $('body').css('background-color', _COLORS[cix]);
  });

/**
 * Keep the scrolling part the right size
 */
  $(function () {
    var header_height = $('header').outerHeight();

    function fix_height() {
      $('#scroller').css('height', $(window).height() - header_height);
    }

    // Fix the height now
    fix_height();

    // Keep it fixed
    $(window).resize(fix_height);

  });


})(); /* END File Scope */


/* vi: ts=2 sts=2 sw=2 et:
 */


