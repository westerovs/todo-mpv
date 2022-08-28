/**
 * Инкапсулировать единую логику представления задачи
 */
export default class TaskView {
  constructor(text, index) {
    this.text = text
    this.index = index
  
    this.onRemoveTaskCb = null
  }
  
  render() {
    const listItem = document.createElement('li')
    listItem.classList.add('form__item')
    
    const btnClose = this.#createBtnClose()
    
    listItem.innerHTML = this.text
    listItem.append(btnClose)
    
    this.onRemoveTaskCb = this.onRemoveTaskCb || function () {};
  
    btnClose.addEventListener('click', (e) => {
      e.preventDefault();
      this.onRemoveTaskCb(parseInt(e.target.dataset.inx, 10));
    })
    
    return listItem
  }
  
  #createBtnClose = () => {
    const btnClose = document.createElement('button')
    btnClose.innerHTML = 'x'
    btnClose.classList.add('form__item-close')
    btnClose.setAttribute('data-inx', this.index)
    
    return btnClose
  }
}

