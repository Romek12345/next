import { RouterModule, Routes } from '@angular/router';

//import { EmployeesComponent } from './views/employees/employees.component';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
//import { TodoComponent } from './views/todo/todo.component';

const routes: Routes = [
  //{ path: 'todo', component: TodoComponent },
  //{ path: 'employees', component: EmployeesComponent },
  { path: '', redirectTo: '/todo', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

