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
    this.addBtn = document.querySelector('#addTaskBtn');
  }

  addTask(){

  }

  removeTask(){

  }

  moveToInProgress(){

  }

  moveToDone(){

  }
}

const toDoApp = new Toder();
