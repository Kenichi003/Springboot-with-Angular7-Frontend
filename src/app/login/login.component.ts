import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = "ken";
  password = "";
  errorMessage = "Invalid Log in";
  invalidLogin = false;

  //in typescript if you pass an argument at a parameter it is already available no need to instantiate it 
  //the parameters in the constructor is injected into this js module/ typescript file
  constructor(private router: Router,
    private hardcodedAuthenticationService: HardcodedAuthenticationService ) { }

  ngOnInit() {}

  handleLogin() {
    console.log(this.username);
    //console.log(this.password);
    // if(this.username === "ken" && this.password === "asd"){
    if(this.hardcodedAuthenticationService.authenticate(this.username, this.password)){
      this.router.navigate(["welcome", this.username]);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }

}
