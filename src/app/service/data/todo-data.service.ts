import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http:HttpClient
  ) { }

  retrieveAllTodos(username) {
    // the <Todo[]> is already defined in the list-todos.component.ts ([] is to make it expect an array of todos)
    return this.http.get<Todo[]>(`http://localhost:8080/users/${username}/todos`);
  }

  deleteTodo(username, todoId) {
    return this.http.delete(`http://localhost:8080/users/${username}/todos/${todoId}`);
  }

  retrieveTodo(username, todoId) {//we made the http.get be cast into a <Todo> because we will assign the result to a Todo object
    return this.http.get<Todo>(`http://localhost:8080/users/${username}/todos/${todoId}`);
  }

  updateTodo(username, todoId, todo) {//the http.put requires two parameters so you should put the body at the 2nd parameter
    return this.http.put<Todo>(`http://localhost:8080/users/${username}/todos/${todoId}` , todo);
  }

  createTodo(username, todo) {
    return this.http.post<Todo>(`http://localhost:8080/users/${username}/todos` , todo);
  }

}
