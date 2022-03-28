const items = document.querySelectorAll('.drag');

function handleDragStart() {
  this.style.opacity = '0.4';
}

function handleDragEnd() {
  this.style.opacity = '1';

  items.forEach((item) => {
    item.classList.remove('over');
  });
}

function handleDragOver(e) {
  if (e.preventDefault) {
    e.preventDefault();
  }

  return false;
}

function handleDragEnter() {
  this.classList.add('over');
}

function handleDragLeave() {
  this.classList.remove('over');
}

export {
  handleDragStart, handleDragEnd, handleDragOver, handleDragEnter, handleDragLeave
};
