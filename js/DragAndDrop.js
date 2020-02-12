//used in Toder.js
const panels = document.querySelectorAll('.panel');

for(const panel of panels) {
  panel.addEventListener('dragover', dragOver);
  panel.addEventListener('dragenter', dragEnter);
  panel.addEventListener('dragleave', dragLeave);
  panel.addEventListener('drop', dragDrop);
}

function dragOver(e) {
e.preventDefault();
}

function dragEnter(e) {
e.preventDefault();
this.style.backgroundColor = '#292929';
}

function dragLeave() {
  this.style.backgroundColor = '#222222';
}

function dragDrop() {
  this.style.backgroundColor = '#222222';
}

function onDragStart(event) {
  event.dataTransfer.setData('text/plain', event.target.id);

  event.currentTarget.style.border = "1px dashed #11998e";
}

function onDragOver(event) {
  event.preventDefault();
}

function onDrop(event) {
  const id = event.dataTransfer.getData('text');

  const draggableElement = document.getElementById(id);
  const dropZone = event.target;

  draggableElement.style.border = "1px solid #9b9b9b";
  dropZone.appendChild(draggableElement);

  event.dataTransfer.clearData();
}
