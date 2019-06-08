import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {

  //isUserLoggedIn: boolean = false;
  constructor(private hardcodedAuthenticationService : HardcodedAuthenticationService) { }

  ngOnInit() {
    //only checks on load
    //this.isUserLoggedIn = this.hardcodedAuthenticationService.isUserLoggedIn();
  }

}
