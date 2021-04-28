// Detect request animation frame
var scroll = window.requestAnimationFrame ||
  // IE Fallback
  function (callback) { window.setTimeout(callback, 1000 / 60); };
var elementsToShow = document.querySelectorAll('.show-on-scroll');

function loop() {
  Array.prototype.forEach.call(elementsToShow, function (element) {
    if (isElementInViewport(element)) {
      element.classList.add('is-visible');
    } else {
      element.classList.remove('is-visible');
    }
  });

  scroll(loop);
}

// Call the loop for the first time
loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  var top = rect.top;
  var bottom = rect.bottom;
  return (
    (top <= 0
      && bottom >= 0)
    ||
    (bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (top >= 0 &&
      bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}