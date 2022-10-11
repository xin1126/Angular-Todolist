import { Component } from '@angular/core';
import TodoItem from "../global"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {

  tempLists: TodoItem[] = [
    { msg: '打code', done: true, id: 1 },
    { msg: '打遊戲', done: false, id: 2 },
    { msg: '吃飯', done: false, id: 3 },
    { msg: '睡覺', done: false, id: 4 },
  ];
  lists: TodoItem[] = [];
  selectStatus: string = 'all';

  selectData(target: string) {
    this.selectStatus = target;
    switch (target) {
      case 'all':
        this.lists = [...this.tempLists];
        break;
      case 'undone':
        this.lists = [...this.tempLists].filter((item) => item.done);
        break;
      default:
        this.lists = [...this.tempLists].filter((item) => !item.done);
        break;
    }
  };

  addTodo(data: TodoItem) {
    this.tempLists.push(data);
    this.selectData(this.selectStatus);
  };

  deleteItem(index: number) {
    this.tempLists.splice(index, 1);
    this.selectData(this.selectStatus);
  }

  updateDone() {
    this.selectData(this.selectStatus);
  }

  get hasDone() {
    return this.lists.filter((item) => item.done).length
  }

  clearHasDone() {
    this.tempLists = this.tempLists.filter((item) => !item.done);
    this.selectData(this.selectStatus);
  }

  clearAll() {
    this.tempLists.length = 0;
    this.selectData(this.selectStatus);
  }

  ngOnInit() {
    this.selectData('all')
  }
}
