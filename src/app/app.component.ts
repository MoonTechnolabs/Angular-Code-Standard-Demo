import { AuthService } from 'src/app/services/auth/auth.service';
import { Component } from '@angular/core';
import { LocalStorageService } from 'src/app/shared/services/localStorage/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular Code Standard Demo';
  isSidebar: boolean = false;

  constructor(
    private authService: AuthService,
    private localStorageService: LocalStorageService
  ) {
    // Display sidebar while used logged in otherwise not
    this.localStorageService.isAuthenticated()
      ? this.authService.setSidebar(true)
      : this.authService.setSidebar(false);

    this.authService.sidebarBehaviorSubject$.subscribe((value: boolean) => {
      this.isSidebar = value;
    });
  }
}
