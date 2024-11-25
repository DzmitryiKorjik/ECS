"use strict";

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.header__dropdown-toggle');
  const menu = document.querySelector('.header__dropdown-menu');

  toggle.addEventListener('click', (event) => {
      event.preventDefault(); 
      const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
     
      toggle.setAttribute('aria-expanded', !isExpanded);
   
      if (isExpanded) {
          menu.style.display = 'none';
      } else {
          menu.style.display = 'block';
      }
  });

  document.addEventListener('click', (event) => {
      if (!toggle.contains(event.target) && !menu.contains(event.target)) {
          menu.style.display = 'none';
          toggle.setAttribute('aria-expanded', 'false');
      }
  });
});




