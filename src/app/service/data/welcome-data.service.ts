import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //only selenium one is available when I injected it on the constructor I have to manually type this import

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  // the HTTPClient dependency injection is used to do HTTP request such as get, post, delete or put
  //also don't forget to inject the 'module' of this in app.module.ts
  constructor(
    private http:HttpClient
  ) { }

  executeHelloWorldBeanService() {
    // console.log("Execute Hello World Bean Service.");
    
    return this.http.get("http://localhost:8080/hello-world-bean");
  }

  //http://localhost:8080/hello-world/path-variable/{name}
  executeHelloWorldServiceWithPathVariable(name) {

    // use the tick key ` left of 1 key in the URL then use a ${} to specify the path variable
    return this.http.get(`http://localhost:8080/hello-world/path-variable/${name}`);
  }

}

//you can create this to define the structure of the JSON response
export class HelloWorldBean {
  constructor(
    public message:string
  ) {}
}
