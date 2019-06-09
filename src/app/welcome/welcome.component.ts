//comments are for understanding the code in Java terms
//package com.todo.spring.web;

//import org.springframework.boot.SpringApplication;
import { Component, OnInit } from '@angular/core';//'./app.component';

//to use a class from another module
import { AppComponent } from '../app.component'
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

//@ComponentScan(
//      value = "com.todo.springboot.web")
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

//public class SpringBootFirstWebApplication implements SomeInterface{
export class WelcomeComponent implements OnInit {

  //String message = "Some Welcome Message";
  message = 'Some Welcome Message'//can also use double quotes
  name = "";//you caan also use semicolons but they are not required
  welcomeMessageFromService:String;

  //public SpringBootFirstWebApplication(){
    // the ActivatedRoute dependency injection is used to accept path/route parameters
  constructor(private route:ActivatedRoute,
              private service:WelcomeDataService) { }

  // void init() { 
  ngOnInit() {
    // console.log(this.message);
    // this.route.snapshot.params['name'];
    this.name = this.route.snapshot.params['name'];
  }

  getWelcomeMessage() {
    // console.log("get welcome message");
    // this.service.executeHelloWorldBeanService();

    // the first parameter in the subscribe is for a succesful request the second one is for an error
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
    // console.log(this.service.executeHelloWorldBeanService());
  }

  getWelcomeMessageWithParameter() {
    // console.log("get welcome message");
    // this.service.executeHelloWorldBeanService();

    // the first parameter in the subscribe is for a succesful request the second one is for an error
    this.service.executeHelloWorldServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
    // console.log(this.service.executeHelloWorldBeanService());
  }


  handleSuccessfulResponse(response) {

    //console.log(response);
    //you can only use the .message property because you defined it at the welcome-data.service.ts on HelloWorldBean class
    //console.log(response.message);

    this.welcomeMessageFromService = response.message;
  }

  handleErrorResponse(error) {
    this.welcomeMessageFromService = error.error.message;
  }

}

//example of creating a new class
export class Class1 {

}