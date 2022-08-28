/**
 * Presenter прослушивает события, извлекает данные, манипулирует ими и
 * обновляет представление
 */

export default class TodoPresenter {
  constructor(view, model) {
    this.view  = view;
    this.model = model;
    
    this.view.onSubmitCb     = this.#onSubmit;
    this.view.onRemoveTaskCb = this.#onRemoveTask;
    this.#updateList();
  }
  
  #onRemoveTask = (inx) => {
    this.model.removeTask(inx);
    this.#updateList();
  }
  
  #onSubmit = (text) => {
    console.log(text)
    this.model.addTask(text);
    this.#updateList();
  }
  
  #updateList() {
    this.view.emptyList();
    this.model.getTasks().forEach((text, inx) => {
      this.view.addTask(text, inx);
    })
  }
}
