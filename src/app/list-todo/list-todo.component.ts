import { Component, Input, Output, EventEmitter } from '@angular/core';
import TodoItem from "../../global"

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html'
})
export class ListTodoComponent {
  @Output() deleteItem = new EventEmitter();
  // @Output() updateDone = new EventEmitter();
  @Input() lists: TodoItem[] = [];

  handelDelete(i: number) {
    this.deleteItem.emit(i)
  }

}
