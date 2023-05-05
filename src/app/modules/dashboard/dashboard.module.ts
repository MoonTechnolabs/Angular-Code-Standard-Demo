import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from 'src/app/modules/dashboard/dashboard-routing.module';
import { HomeComponent } from 'src/app/modules/dashboard/home/home.component';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, DashboardRoutingModule, SharedModule],
})
export class DashboardModule {}
