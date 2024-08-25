'use strict';

window.scrollToActiveChart = () => {
  if (window.location.hash) {
    const focus = window.location.hash.substring(1);
    let element = document.getElementById(focus);
    if (!element) {
      element = document.getElementById(decodeURIComponent(focus));
    }
    if (element) {
      element.scrollIntoView(false);
    }
  }
};

window.configureToolTips = () => {
  const tooltips = [...document.querySelectorAll('[data-bs-toggle="tooltip"]')];
  tooltips.map((element) => new bootstrap.Tooltip(element));
};
