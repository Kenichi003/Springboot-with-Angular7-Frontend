import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
import { TodoComponent } from './todo/todo.component';

//welcome
const routes: Routes = [//the routing has a heirarchy the order of declaration is important error should be last so that it will catch everything
  { path:"", component: LoginComponent },//so that login is default
  { path:"login", component: LoginComponent },
  //the colon is used to define of it is a path variable
  { path:"welcome/:name", component: WelcomeComponent, canActivate:[RouteGuardService]},
  { path:"todos", component: ListTodosComponent, canActivate:[RouteGuardService] },
  { path:"todos/:todoId", component: TodoComponent, canActivate:[RouteGuardService] },
  { path:"logout", component: LogoutComponent, canActivate:[RouteGuardService] },
  
  { path:"**", component: ErrorComponent}//for all of the undefined routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
