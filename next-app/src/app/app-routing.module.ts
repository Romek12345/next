import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { TodoComponent } from './views/todo/todo.component';
import { LockpickComponent } from './views/lockpick/lockpick.component';
import { EmployeesComponent } from './views/employees/employees.component';

const routes: Routes = [
  { path: 'todo', component: TodoComponent },
  { path: 'lockpick', component: LockpickComponent},
  { path: 'employees', component: EmployeesComponent },
  { path: '', redirectTo: '/todo', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

