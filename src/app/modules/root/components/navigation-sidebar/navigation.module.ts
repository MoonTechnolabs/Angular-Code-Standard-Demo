import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from 'src/app/modules/root/components/navigation-sidebar/sidebar/sidebar.component';

const components = [SidebarComponent];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, RouterModule],
  exports: [SidebarComponent],
})
export class NavigationModule {}
