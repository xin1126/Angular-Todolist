import { Component, Output, EventEmitter } from '@angular/core';
import TodoItem from "../../global"

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
})
export class AddTodoComponent {
  @Output() addTodo = new EventEmitter<TodoItem>();
  todoMsg = '';

  add() {
    if (this.todoMsg) {
      const data = {
        msg: this.todoMsg,
        done: false,
        id: Date.now(),
      }
      this.addTodo.emit({
        msg: this.todoMsg,
        done: false,
        id: Date.now(),
      });
      this.todoMsg = '';
    }
  }
}
