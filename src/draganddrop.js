function handleDragStart(e) {
  console.log('estoy en el star');
  this.style.opacity = '0.4';
}

function handleDragEnd(e) {
  console.log('estoy en el end');
  this.style.opacity = '1';

  items.forEach((item) => {
    item.classList.remove('over');
  });
}

function handleDragOver(e) {
  console.log('estoy en el over');
  if (e.preventDefault) {
    e.preventDefault();
  }

  return false;
}

function handleDragEnter(e) {
  console.log('estoy en el enter');
  this.classList.add('over');
}

function handleDragLeave(e) {
  console.log('estoy en el leave');
  this.classList.remove('over');
}

let items = document.querySelectorAll('.drag');
export { handleDragStart, handleDragEnd, handleDragOver, handleDragEnter, handleDragLeave };
