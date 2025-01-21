import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';
import { LocalStorageService } from 'src/app/shared/services/localStorage/local-storage.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard  {
  constructor(
    private locaStorageService: LocalStorageService,
    private router: Router
  ) {}

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
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.canActivate();
  }
}
