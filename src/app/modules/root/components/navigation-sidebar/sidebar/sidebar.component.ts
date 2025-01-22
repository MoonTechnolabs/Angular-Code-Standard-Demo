import { AuthorizationDetails } from 'src/app/model/interfaces/employees.interface';
import { AuthService } from 'src/app/services/auth/auth.service';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { LocalStorageService } from 'src/app/shared/services/localStorage/local-storage.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, RouterModule],
})
export class SidebarComponent {
  private authService = inject(AuthService);
  private locaStorageService = inject(LocalStorageService);
  private router = inject(Router);

  /**
   * Get the firstname from localstorage
   */
  userInfo = signal<string>(
    this.locaStorageService.getLocalStorage(AuthorizationDetails.firstName)
  );

  /**
   * User logout
   */
  logout(): void {
    this.locaStorageService.removeLocalStorage();
    this.authService.setSidebar(false); // if user is not logged in then not displaying sidebar
    void this.router.navigate(['/login']);
  }
}
