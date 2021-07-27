import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
//import { EmployeesComponent } from './employees/employees.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SharedModule } from '../shared/shared.module';
import { TodoComponent } from './todo/todo.component';
import { TodoItemComponent } from './todo/todo-item/todo-item.component';
import { LockpickComponent } from './lockpick/lockpick.component';

@NgModule({
  declarations: [
    TodoComponent,
    TodoItemComponent,
    //EmployeesComponent,
    LockpickComponent,
    PageNotFoundComponent,
    
  ],
  imports: [CommonModule, SharedModule, FormsModule, ReactiveFormsModule, HttpClientModule],
})
export class ViewsModule {}