import { AuthRoutingModule } from 'src/app/modules/auth/auth-routing.module';
import { CommonModule } from '@angular/common';
import { LoginComponent } from 'src/app/modules/auth/login/login.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from 'src/app/modules/auth/register/register.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [AuthRoutingModule, CommonModule, ReactiveFormsModule],
})
export class AuthModule {}
