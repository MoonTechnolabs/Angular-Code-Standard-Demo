import { AuthGuard } from 'src/app/guards/guard/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/modules/dashboard/home/home.component'; // Import HomeComponent directly
import { ListComponent } from './modules/employees/pages/list/list.component';
import { CreateComponent } from './modules/employees/pages/create/create.component';
import { DetailsComponent } from './modules/employees/pages/details/details.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { RegisterComponent } from './modules/auth/register/register.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login',
  },
  {
    path: 'register',
    component: RegisterComponent,
    title: 'Register',
  },

  {
    path: 'dashboard',
    canActivateChild: [AuthGuard],
    component: HomeComponent, // Directly use the component, not loadChildren
  },
  {
    path: 'employees',
    canActivateChild: [AuthGuard],
    component: ListComponent, // Directly use the component, not loadChildren
  },
  {
    path: 'employees/create',
    canActivateChild: [AuthGuard],
    component: CreateComponent, // Directly use the component, not loadChildren
  },
  {
    path: 'employees/details/:id',
    canActivateChild: [AuthGuard],
    component: DetailsComponent, // Directly use the component, not loadChildren
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
