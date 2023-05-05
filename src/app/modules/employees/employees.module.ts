import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Modules with Sort alphabetically - case insensitive
import { EmployeesRoutingModule } from 'src/app/modules/employees/employees-routing.module';

// Pipes with Sort alphabetically - case insensitive
import { GetBgcolorForGroupEntryPipe } from 'src/app/modules/employees/pipes/get-bgcolor-for-group-entry/get-bgcolor-for-group-entry.pipe';

// Components with Sort alphabetically - case insensitive
import { CreateComponent } from 'src/app/modules/employees/pages/create/create.component';
import { DetailsComponent } from 'src/app/modules/employees/pages/details/details.component';
import { ListComponent } from 'src/app/modules/employees/pages/list/list.component';
import { UserDataComponent } from 'src/app/modules/employees/components/user-data/user-data.component';

// The route pages - with Sort alphabetically - case insensitive
const pages = [CreateComponent, DetailsComponent, ListComponent];

// The child components
const components = [UserDataComponent];

// Pipes
const pipes = [GetBgcolorForGroupEntryPipe];

@NgModule({
  declarations: [...pages, ...components, ...pipes],
  imports: [CommonModule, EmployeesRoutingModule],
})
export class EmployeesModule {}
