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
  const form = document.querySelector(`.formula form[name="${activeForm}"]`);

  if (!form) {
    return;
  }

  form.closest('.formula').classList.add('active');
}

function start() {
  setJSEnabled();
  setInitialState();
}

document.addEventListener('DOMContentLoaded', () => {
  start();
});
