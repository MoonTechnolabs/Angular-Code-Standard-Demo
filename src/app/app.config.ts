import { provideRouter, Route } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TokenInterceptor } from 'src/app/interceptors/token/token.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard } from './guards/guard/auth.guard';
import { LoginComponent } from './modules/auth/login/login.component';
import { RegisterComponent } from './modules/auth/register/register.component';
import { HomeComponent } from './modules/dashboard/home/home.component';
import { CreateComponent } from './modules/employees/pages/create/create.component';
import { DetailsComponent } from './modules/employees/pages/details/details.component';
import { ListComponent } from './modules/employees/pages/list/list.component';

const routes: Route[] = [
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

export const appConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()),
    importProvidersFrom(FormsModule, ReactiveFormsModule, NgbModule),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
    NgbActiveModal,
  ],
};
