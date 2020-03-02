import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import{FormsModule} from '@angular/forms';
import{EmployeeService} from '../shared/employee.service';
import{HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [EmployeeComponent, EmployeeListComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  exports:[EmployeeComponent,EmployeeListComponent],
  providers:[EmployeeService]
})
export class EmployeesModule { }
