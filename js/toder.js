class Toder {
  constructor() {
    this.init();
  }
  init(){
    this.taskNameInput = document.querySelector('#taskName');
    this.taskDescInput = document.querySelector('#taskDesc');
    this.toDoPanel = document.querySelector('#toDoPanel');
    this.inProgressPanel = document.querySelector('#inProgressPanel');
    this.donePanel = document.querySelector('#donePanel');
    this.addBtn = document.querySelector('#addTaskBtn').addEventListener('click', this.addTask.bind(this));
    this.removeBtns = document.getElementsByClassName('removeBtn');
    this.moveTaskBtns = document.getElementsByClassName('moveBtn');

    this.taskName = "";
    this.taskDesc = "";

    this.createListeners();
  }

  createListeners(){
    Array.from(this.removeBtns).forEach(btn => {
      btn.addEventListener('click', this.removeTask);
    });

    Array.from(this.moveTaskBtns).forEach(btn => {
      btn.addEventListener('click', this.moveTask);
    })

  }

  addTask(e){
    if(this.taskNameInput.value) {
      this.taskName = this.taskNameInput.value;
      this.taskDesc = this.taskDescInput.value;

      this.taskNameInput.value = "";
      this.taskDescInput.value = "";

      this.toDoPanel.appendChild(this.createListItemJS());

      this.createListeners();
    }

    else {
      alert('Type task name');
    }
  }

  createListItemJS(){
   const panelContentItem =  document.createElement('div');
   panelContentItem.classList.add(`panel-content-item`);

   let panelContentItemLeft = document.createElement('div');
   panelContentItemLeft.classList.add('panel-content-item-left');
   let panelH3 = document.createElement('h3');
   panelH3.innerHTML = this.taskName;
   let panelP = document.createElement('p');
   panelP.innerHTML = this.taskDesc;
   panelContentItemLeft.appendChild(panelH3);
   panelContentItemLeft.appendChild(panelP);
   panelContentItem.appendChild(panelContentItemLeft);

   let panelContentItemRight = document.createElement('div');
   panelContentItemRight.classList.add("panel-content-item-right");
   panelContentItemRight.innerHTML = "<span class=\"icon\"><i class=\"moveBtn fas fa-arrow-right\"></i></span><span class=\"icon\"><i class=\"removeBtn far fa-trash-alt\"></i></span>";
   panelContentItem.appendChild(panelContentItemRight);

   return panelContentItem;
  }

  // createListItemHTML() {
  //   return `<div class="panel-content-item"> /
  //             <div class="panel-content-item-left">
  //               <h3>${this.taskName}</h3>
  //               <p>${this.taskDesc}</p>
  //             </div>
  //             <div class="panel-content-item-right">
  //               <span class="icon"><i class="fas fa-arrow-right"></i></span>
  //               <span class="icon"><i class="far fa-trash-alt"></i></span>
  //             </div>
  //           </div>`;
  // }

  removeTask(){
    this.parentNode.parentNode.parentNode.remove();
    toDoApp.createListeners();
  }

  moveTask(){
    const task = this.parentNode.parentNode.parentNode;
    let self = this;
    if (this.parentNode.parentNode.parentNode.parentNode.getAttribute('id') === "toDoPanel") {
      task.remove();
      toDoApp.inProgressPanel.appendChild(task);
    } else if(this.parentNode.parentNode.parentNode.parentNode.getAttribute('id') === "inProgressPanel") {
      task.remove();
      toDoApp.donePanel.appendChild(task);
    }

    toDoApp.createListeners();

  }

}

const toDoApp = new Toder();
