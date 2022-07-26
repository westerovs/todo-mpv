import TodoView from './js/view/TodoView.js'
import TodoModel from './js/Model.js'
import TodoPresenter from './js/Presenter.js'

const form = document.querySelector('[data-bind=todoView]')
new TodoPresenter(new TodoView(form), new TodoModel())
