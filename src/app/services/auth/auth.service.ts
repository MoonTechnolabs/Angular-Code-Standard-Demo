import {
  AuthorizationDetails,
  IUserLoginSuccess,
} from 'src/app/model/interfaces/employees.interface';
import { BehaviorSubject, Observable, of, tap } from 'rxjs';
import { Injectable } from '@angular/core';
import { LocalStorageService } from 'src/app/shared/services/localStorage/local-storage.service';
import { userAuthData } from 'src/app/model/const/api';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userAuthData = userAuthData;
  constructor(private localStorageService: LocalStorageService) {}

  sidebarBehaviorSubject$ = new BehaviorSubject<boolean>(false);

  /**
   * Login to the application
   * @param username - Account username
   * @param password - Account password
   * @returns The login data
   */
  login(username: string, password: string): Observable<IUserLoginSuccess> {
    if (username === 'kminchelle' && password === '0lelplR') {
      return of(this.userAuthData).pipe(
        tap((result) => {
          this.localStorageService.setKeyInLocalstorage(
            AuthorizationDetails.id,
            String(result.id)
          );
          this.localStorageService.setToken(result.token);
          this.localStorageService.setUserAccountData(
            result.firstName,
            result.lastName,
            result.email
          );
        })
      );
    } else {
      return of({
        email: '',
        firstName: '',
        gender: '',
        id: 0,
        lastName: '',
        message: 'Invalid Credentials',
        success: false,
        token: '',
        username: '',
      });
    }
  }

  /**
   * Set sidebar
   * @param isShowSidebar - passing boolean value
   */
  setSidebar(isShowSidebar: boolean): void {
    this.sidebarBehaviorSubject$.next(isShowSidebar);
  }
}
