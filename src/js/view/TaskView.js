/**
 * Инкапсулировать единую логику представления задачи
 */
export default class TaskView {
  constructor(text, inx) {
    this.text = text
    this.index = inx
  
    this.onRemoveTaskCb = null
  }
  
  render() {
    const el = document.createElement('li')
    el.innerHTML = `${ this.text } <a href="#" data-inx="${this.index}">[x]</a>`
    
    this.onRemoveTaskCb = this.onRemoveTaskCb || function () {};
    console.log(this.onRemoveTaskCb)
    
    const btnClose = el.querySelector('a')
    btnClose.addEventListener('click', (e) => {
      e.preventDefault();
      this.onRemoveTaskCb(parseInt(e.target.dataset.inx, 10));
    })
    
    return el
  }
}

