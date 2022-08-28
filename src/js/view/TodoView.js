import TaskView from './TaskView.js'

/**
 * Логика просмотра виджета TODO
 * Принимает на вход форму
 */

export default class TodoView {
  constructor(form) {
    this.form = form
    
    this.input = form.querySelector('[data-bind=input]')
    this.list  = form.querySelector('[data-bind=tasks]')
    
    this.onSubmitCb = function () {}
    this.onRemoveTaskCb = function () {}
    
    this.form.addEventListener("submit", (e) => {
      e.preventDefault()
      this.onSubmitCb(this.input.value)
    })
  }
  
  emptyList() {
    this.list.innerHTML = ''
  }
  
  addTask(text, index) {
    const taskView = new TaskView(text, index)
    
    taskView.onRemoveTaskCb = this.onRemoveTaskCb
    this.list.appendChild(taskView.render())
  }
}
