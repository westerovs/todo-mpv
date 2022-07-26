import TaskView from './TaskView.js';

/**
 * Логика просмотра виджета TODO
 */
export default class TodoView {
  constructor(el) {
    this.el = el
    this.input = el.querySelector("[data-bind=input]");
    this.list  = el.querySelector("[data-bind=tasks]");
    
    this.onSubmitCb = function () {};
    this.onRemoveTaskCb = function () {};
    
    this.el.addEventListener("submit", (e) => {
      e.preventDefault();
      this.onSubmitCb(this.input.value);
    });
  }
  
  emptyList() {
    this.list.innerHTML = "";
  }
  
  addTask(text, inx) {
    let taskView = new TaskView(text, inx);
    taskView.onRemoveTaskCb = this.onRemoveTaskCb;
    this.list.appendChild(taskView.render());
  }
}
