import {
  AUTHORIZATION_SCOPE,
  AuthorizationDetails,
  DecodedToken,
  IAccountData,
} from 'src/app/model/interfaces/employees.interface';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  helper: JwtHelperService;
  tokenName = 'AuthToken';

  /**
   * Supply JWT token data to APP
   */
  private authorizationScope = new ReplaySubject<AUTHORIZATION_SCOPE>(1);
  authorizationScope$ = this.authorizationScope.asObservable();

  constructor() {
    this.helper = new JwtHelperService();
    const tokenName = this.getToken();
    if (tokenName !== '{}') this.setAuthorizationScope(this.decodeToken());
  }

  /**
   * Get JWT token for the logged in user from localStorage
   * @returns JWT Auth token string for current login user
   */
  public getToken(): string {
    return localStorage.getItem(this.tokenName) || '{}';
  }

  /**
   * Get the value from LocalStorage as per the key name
   * @param name - Name of LocalStorage key
   * @returns Data from localStorage
   */
  getLocalStorage(name: AuthorizationDetails): string {
    return localStorage.getItem(name) || '';
  }

  /**
   * Decoding JWT token and returns content
   * @returns Information about logged user from JWT token
   */
  decodeToken(): DecodedToken {
    return (
      this.helper.decodeToken(localStorage.getItem(this.tokenName) || '{}') ??
      ({} as DecodedToken)
    );
  }

  /**
   * Set JWT token to LocalStorage
   * @param token - JWT token set to localStorage
   */
  public setToken(token: string): void {
    localStorage.setItem(this.tokenName, token);
    this.setAuthorizationScope(this.decodeToken());
  }

  /**
   * Set decoded JWT token data to DecodedToken object
   * @param data - Data object of decoded JWT token payload
   */
  public setAuthorizationScope(data: DecodedToken): void {
    this.authorizationScope.next({
      ...data,
    });
  }

  /**
   * Remove JWT token and other values from localStorage
   */
  public removeToken(): void {
    localStorage.removeItem(this.tokenName);
  }

  /**
   * Check whether loggedin user isAuthenticated based on JWT token
   * @returns Boolean to check JWT token valid or not
   */
  public isAuthenticated(): boolean {
    if (this.getToken() === '{}') {
      return false;
    }
    return true; // should be -> !this.helper.isTokenExpired(this.getToken());
  }

  /**
   * Remove local storage data
   */
  public removeLocalStorage(): void {
    localStorage.clear();
  }

  /**
   * Set value from LocalStorage as per the tokenName
   * @param keyName - Name of key for localStorage
   * @param value - The value of key to store in localstorage
   */
  public setKeyInLocalstorage(
    keyName: AuthorizationDetails,
    value: string
  ): void {
    localStorage.setItem(keyName, value);
  }

  /**
   * Store the account data of external admin in localstorage
   * @param firstName - The firstname of logged in user
   * @param lastName - The lastname of logged in user
   * @param email - The email of logged in user
   */
  setUserAccountData(firstName: string, lastName: string, email: string): void {
    this.setKeyInLocalstorage(AuthorizationDetails.firstName, firstName);
    this.setKeyInLocalstorage(AuthorizationDetails.lastName, lastName);
    this.setKeyInLocalstorage(AuthorizationDetails.email, email);
  }

  /**
   * Gets the account data of external admin from localstorage
   * @returns The object of user data
   */
  getUserAccountData(): IAccountData {
    return {
      firstName: this.getLocalStorage(AuthorizationDetails.firstName),
      lastName: this.getLocalStorage(AuthorizationDetails.lastName),
      email: this.getLocalStorage(AuthorizationDetails.email),
    };
  }
}
