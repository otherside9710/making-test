import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todos } from '../../models/todos';
import {NgForm} from '@angular/forms';
import swal from 'sweetalert2';
import { AngularFireDatabase} from 'angularfire2/database';
import {FirebaseListObservable} from 'angularfire2/database-deprecated';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {
  todoList: Todos[];
  todoListName: FirebaseListObservable<any[]>;

  constructor(
    private todoService: TodoService,
    private db: AngularFireDatabase
  ) { }

  ngOnInit() {
    return this.todoService.getTodos()
      .snapshotChanges().subscribe(item => {
        this.todoList = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x['$key'] = element.key;
          this.todoList.push(x as Todos);
        });
      });
  }
  editTodo(todo: Todos) {
    this.todoService.selectedTodo = Object.assign({}, todo);
    this.resetForm();
  }

  deleteTodo($key: string) {
    if (confirm('Está Seguro que quiere eliminar la tarea?')) {
      this.todoService.deleteTodo($key);
      swal('Tarea Eliminada', 'La tarea se fue eliminada correctamente!', 'success');
      this.resetForm();
    }
  }

  resetForm(todoForm?: NgForm) {
    if (todoForm != null) {
      todoForm.reset();
      this.todoService.selectedTodo = new Todos();
    }
  }

  findByNombre(filtro) {
    this.todoListName = this.db.database.app.database.call('/todos', {
      query: {
        orderByChild: 'nombre',
        equalTo: filtro
      }
    }) as FirebaseListObservable<any[]>;
  }
}
