import TodoView from './view/TodoView.js';
import TodoModel from './Model.js';
import TodoPresenter from './Presenter.js';
/**
 * Presenter прослушивает события, извлекает данные, манипулирует ими и
 * обновляет представление
 */









let form = document.querySelector( "[data-bind=todoView]" );
new TodoPresenter( new TodoView( form ), new TodoModel() );
