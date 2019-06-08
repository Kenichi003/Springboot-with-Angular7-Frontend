import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username, password) {
    //console.log("before login " + this.isUserLoggedIn())
    if (username === "ken" && password === "asd") {
      sessionStorage.setItem('authenticateUser', username);
      //console.log("after login " + this.isUserLoggedIn())
      return true;
    } else {
      sessionStorage.removeItem("authenticateUser");//just added this
      return false;
    }
  }

  isUserLoggedIn() {
    
    //let is like a private variablee declaration its scope is just within this function
    let user = sessionStorage.getItem("authenticateUser");
    // console.log("username: " + user);
    return !(user === null); 

  }

  logout(){
    sessionStorage.removeItem("authenticateUser");
  }

}
