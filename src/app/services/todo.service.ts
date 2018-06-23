import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {Todos} from '../models/todos';

@Injectable()
export class TodoService {

  public todoList: AngularFireList<any>;
  public selectedTodo: Todos = new Todos();

  constructor(
    private firebase: AngularFireDatabase
  ) {
  }

  getTodos() {
    return this.todoList = this.firebase.list('todos');
  }

  insertTodo(todo: Todos) {
    return new Promise((resolve, reject) => {
      this.todoList.push({
        nombre: todo.nombre,
        descripcion: todo.descripcion,
        estado: todo.estado
      }).then(userData => resolve(userData),
        err => reject(err));
    });
  }

  updateTodo(todo: Todos) {
    this.todoList.update(todo.$key, {
      nombre: todo.nombre,
      descripcion: todo.descripcion,
      estado: todo.estado
    });
  }

  deleteTodo($key: string) {
    this.todoList.remove($key);
  }
}
