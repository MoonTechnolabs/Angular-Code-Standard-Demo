import { Router, UrlTree } from '@angular/router';
import { inject, Injectable } from '@angular/core';
import { LocalStorageService } from 'src/app/shared/services/localStorage/local-storage.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  private locaStorageService = inject(LocalStorageService);
  private router = inject(Router);

  /**
   * User authentication
   * @returns If user not authentication then it will redirect on login page.
   */
  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (!this.locaStorageService.isAuthenticated()) {
      this.locaStorageService.removeLocalStorage();
      void this.router.navigate(['/login']);
      return false;
    }
    return true;
  }

  /**
   *
   * @param childRoute
   * @param state
   * @returns If guards return true, navigation continues otherwise, navigation is cancelled.
   */
  canActivateChild():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.canActivate();
  }
}
