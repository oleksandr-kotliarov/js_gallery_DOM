'use strict';

const gallery = document.querySelector('.gallery__list');

gallery.addEventListener('click', (occasion) => {
  const item = occasion.target.closest('.list-item__link');

  occasion.preventDefault();

  document.querySelector('#largeImg').src = item.href;
});
