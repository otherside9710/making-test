import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import {NgForm} from '@angular/forms';
import { Todos } from '../../models/todos';
import swal from 'sweetalert2';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  constructor(
    private todoService: TodoService
  ) { }

  ngOnInit() {
    this.todoService.getTodos();
    this.resetForm();
  }

  addTodo(todoForm: NgForm) {
    if (todoForm.value.$key == null) {
      this.todoService.insertTodo(todoForm.value);
      swal('Tarea Agregada', 'La tarea se ha agregado a la lista correctamente!', 'success');
    } else {
      this.todoService.updateTodo(todoForm.value);
      swal('Tarea actualizada', 'La tarea fue actualizada correctamente!', 'success');
    }
    this.resetForm(todoForm);
  }

  resetForm(todoForm?: NgForm) {
    if (todoForm != null) {
      todoForm.reset();
      this.todoService.selectedTodo = new Todos();
    }
  }

}
