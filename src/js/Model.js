/**
 * Уровень обслуживания для сохранения данных в локальном хранилище
 */
export default class TodoModel {
  getTasks() {
    return JSON.parse(localStorage.todo || "[]");
  }
  
  removeTask(inx) {
    let list = this.getTasks().filter((task, i) => {
      return i !== inx;
    });
    localStorage.todo = JSON.stringify(list);
  }
  
  addTask(val) {
    let list = this.getTasks();
    list.push(val);
    localStorage.todo = JSON.stringify(list);
  }
}
