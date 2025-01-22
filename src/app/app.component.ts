import { AuthService } from 'src/app/services/auth/auth.service';
import { Component, inject } from '@angular/core';
import { LocalStorageService } from 'src/app/shared/services/localStorage/local-storage.service';
import { SidebarComponent } from './modules/root/components/navigation-sidebar/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [SidebarComponent, RouterModule],
})
export class AppComponent {
  private localStorageService = inject(LocalStorageService);
  authService = inject(AuthService);

  title = 'Angular Code Standard Demo';

  constructor() {
    // Display sidebar while used logged in otherwise not
    this.localStorageService.isAuthenticated()
      ? this.authService.setSidebar(true)
      : this.authService.setSidebar(false);
  }
}
