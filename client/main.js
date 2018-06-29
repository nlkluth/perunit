/* global document */

function setJSEnabled() {
  if (!document.body) {
    return;
  }

  document.body.classList.remove('no-js');
  document.body.classList.add('js');
}

function setInitialState() {
  const activeForm = 'base_impedance';

  document.querySelectorAll('.formula').forEach(element => {
    if (element.querySelector('form').name === activeForm) {
      element.classList.add('active');
    }
  });
}

function start() {
  setJSEnabled();
  setInitialState();
}

document.addEventListener('DOMContentLoaded', () => {
  start();
});
