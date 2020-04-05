function select(element) {
  return document.querySelector(element);
}

const mouseCursor = select('.cursor');

const word = select('.hidden-word');

function cursor(e) {
  mouseCursor.style.top = `${e.pageY}px`;
  mouseCursor.style.left = `${e.pageX}px`;
}

word.addEventListener('mouseleave', () => {
  mouseCursor.classList.remove('cursor-grow');
  word.classList.remove('hovered-word');
});

word.addEventListener('mouseover', () => {
  mouseCursor.classList.add('cursor-grow');
  word.classList.add('hovered-word');
});

window.addEventListener('mousemove', cursor);
