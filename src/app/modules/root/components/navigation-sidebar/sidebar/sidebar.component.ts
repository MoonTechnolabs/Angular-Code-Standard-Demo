import { AuthorizationDetails } from 'src/app/model/interfaces/employees.interface';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LocalStorageService } from 'src/app/shared/services/localStorage/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  userInfo!: string;
  constructor(
    private authService: AuthService,
    private locaStorageService: LocalStorageService,
    private router: Router
  ) {
    // get firstName from localStorage
    this.userInfo = locaStorageService.getLocalStorage(
      AuthorizationDetails.firstName
    );
  }

  /**
   * User logout
   */
  logout(): void {
    this.locaStorageService.removeLocalStorage();
    this.authService.setSidebar(false); // if user is not logged in then not displaying sidebar
    void this.router.navigate(['/login']);
  }
}
