/**
 * Toogle menu
 */
document.querySelector('.header .menu-icon').addEventListener('click', () => {
  toggleMenu();
  document.querySelector('.nav-menu').style.display = 'block';
  document.querySelectorAll('.nav-menu .menu-item').forEach(elem => {elem.style.opacity = 0;})
  setOrderOfNavAnimation();
});

document.querySelector('.nav-menu .menu-icon').addEventListener('click', () => {
  toggleMenu();
  setOrderOfNavAnimation('hide');
  document.querySelectorAll('.nav-menu .menu-item').forEach(elem => {elem.style.opacity = 1;})
  setTimeout(() => {
    document.querySelector('.nav-menu').style.display = 'none';
  }, 500);
});

const toggleMenu = () => {
  let menu = document.querySelector('nav.nav-menu');

  if (!menu || !menu.classList) {
    return;
  }

  menu.classList.toggle('fade');
  menu.classList.add('fade-out');
};

// Show nav 
const setOrderOfNavAnimation = (method = 'show') => {
  let menuElems = document.querySelectorAll('.nav-menu .menu-item');
  let menuElemsArr = [].slice.call(menuElems);

  if(method === 'hide') {
    menuElemsArr.reverse();
  }

  menuElemsArr.forEach((elem, i) => {
    elem.style.animationDelay = i * 150 + 'ms';
  });
  
}

/**
 * Animation on scroll
 */

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