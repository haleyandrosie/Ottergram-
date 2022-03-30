const detail_image_selector = '[data-image-role= "target"]';
const detail_title_selector = '[data-image-role= "title"]';
const thumbnail_link_selector = '[data-image-role= "trigger"]';

function setDetails (imageUrl, titleText) {
  'use strict';
   const detailImage = document.querySelector(detail_image_selector);
   detailImage.setAttribute('src', imageUrl);
   const detailTitle = document.querySelector(detail_title_selector);
   detailTitle.textContent = titleText;
}

function imageFromThumb (thumbnail) {
  'use strict'
  return thumbnail.getAttribute('data-image-url');
}

function titleFromThumb (thumbnail) {
  'use strict';
  return thumbnail.getAttribute('data-image-title')
}

function setDetailsFromThumb (thumbnail) {
  'use strict'
  setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
}

function addThumbClickHandler (thumbnail) {
  'use strict'
   thumbnail.addEventListener('click', function (event) {
    event.preventDefault();
    setDetailsFromThumb(thumbnail);
 });
}

function getThumbnailsArray () {
  'use strict'
  const thumbnails = document.querySelectorAll(thumbnail_link_selector);
  const thumbnailArray = [].slice.call(thumbnails);
  return thumbnailArray;
}

function initializeEvents() {
  'use strict'
  const thumbnails =getThumbnailsArray();
  thumbnails.forEach(addThumbClickHandler);
}

initializeEvents();
