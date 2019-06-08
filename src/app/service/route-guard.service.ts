import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';

@Injectable({
  providedIn: 'root'
})
//add a CanActivate implementation (from @angular/router)!
export class RouteGuardService implements CanActivate {

  constructor(private hardcodedAuthenticationService: HardcodedAuthenticationService,
    private router: Router) { }

  //this linee is copied when you go in the CanActivate implemantation
  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree;
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    
    if (this.hardcodedAuthenticationService.isUserLoggedIn()){//dont forget the open close parenthesis on the functions LOL
      
      return true;
    } else {

      this.router.navigate(['login']);//used to navigate to login if no session detected
      return false;
    }

  }
}
