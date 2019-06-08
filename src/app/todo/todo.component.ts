import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todoId: number;
  todo: Todo;

  constructor(
    private todoService: TodoDataService,
    private route: ActivatedRoute, // we added this here so that we can retrieve the id to ngInit
    private router: Router

  ) { }

  ngOnInit() {

    this.todoId = this.route.snapshot.params["todoId"]; //the name in the param is indicated in the app-routing.module.ts
    this.todo = new Todo(this.todoId, "", false, new Date()); //I initialized a new Todo because it is creating an error at the front end because it is asynchronously loading and the front end is getting a null

    if (this.todoId != -1) {//it only goes here if there is a positive/existing todoId which means it's an edit
      this.todoService.retrieveTodo("ken", this.todoId)
        .subscribe(
          data => this.todo = data
        )
    }
  }

  saveTodo() {

    if(this.todoId === -1) { //this means I am trying to create a new todo
      this.todoService.createTodo("ken", this.todo)
      .subscribe(
        data => {
          //console.log(data)
          this.router.navigate(["todos"])
        }
      )
    } else { //this means I am trying to update an existing todo
      this.todoService.updateTodo("ken", this.todoId, this.todo)
      .subscribe(
        data => {
          //console.log(data)
          this.router.navigate(["todos"])
        }
      )
    }
    

  }

}
