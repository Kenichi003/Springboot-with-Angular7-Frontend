import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

//declare a class
export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  constructor(
    private todoService: TodoDataService, //we can import this because the todo-data.service is by default an injectible when you create it
    private router: Router //don't forget to add this component in thee app-routing.module.ts
    ) { }

  message: string;
  //(structured)
  todos: Todo[]; //we assign value to it on the ngOnInit() and the bottom commented code is for harcode assign
  // = [
  //   new Todo(1, "Learn Angular", false, new Date()),
  //   new Todo(2, "Learn Springboot", false, new Date()),
  //   new Todo(3, "Set up Repo", true, new Date()),
  // ]

  //declare an array object (unstructured)
  // todos = [
  //   { id: 1, description: "Learn Angular" },
  //   { id: 2, description: "Learn Springboot" },
  //   { id: 3, description: "Set up Repo" }
  // ]

  //declare a single object
  // todo = {
  //   id : 1,
  //   description: "Learn Angular"
  // }

  ngOnInit() {

    this.refreshTodos();

    //this code is moved to refresh todos for better code reuseability
    // this.todoService.retrieveAllTodos('ken').subscribe(
    //   response => {
    //     console.log(response);
    //     this.todos = response;//you should subscribe first to make an observable and assign the response to the todo variable
        
    //   }
    // )
  }

  refreshTodos(){
    this.todoService.retrieveAllTodos('ken').subscribe(
      response => {
        // console.log(response);
        this.todos = response;//you should subscribe first to make an observable and assign the response to the todo variable
        
      }
    )
  }

  deleteTodo(todoId){
    // console.log(`delete todo ${todoId}`);
    this.todoService.deleteTodo("ken", todoId).subscribe(
      response => {
        console.log(response);
        this.message = `id: ${todoId} has been successfully deleted!`
        this.refreshTodos();
      }
    )
  }

  updateTodo(todoId){
    // console.log(`update todo ${todoId}`);
    this.router.navigate(['todos',todoId])
  }

  addTodo(todoId){
    // you can 0 or -1 because that is thee todoId condition that you have set for creating a new todo
    this.router.navigate(['todos', -1])
  }

}
