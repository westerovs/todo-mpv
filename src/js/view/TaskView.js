/**
 * Инкапсулировать единую логику представления задачи
 */
export default class TaskView {
  constructor(text, inx) {
    this.text = text;
    this.inx  = inx;
  }
  
  render() {
    let el = document.createElement("li");
    el.innerHTML = this.text + " <a href=\"#\" data-inx=\"" + this.inx + "\">[x]</a>";
    this.onRemoveTaskCb = this.onRemoveTaskCb || function () {
    };
    el.querySelector("a").addEventListener("click", (e) => {
      e.preventDefault();
      this.onRemoveTaskCb(parseInt(e.target.dataset.inx, 10));
    })
    return el;
  }
}
