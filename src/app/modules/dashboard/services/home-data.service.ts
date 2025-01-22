import {
  BehaviorSubject,
  combineLatest,
  map,
  of,
  switchMap,
  withLatestFrom,
} from 'rxjs';
import { DashboardService } from 'src/app/services/dashboard/dashboard.service';
import { inject, Injectable } from '@angular/core';
import { LocalStorageService } from 'src/app/shared/services/localStorage/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class HomeDataService {
  private dashboardService = inject(DashboardService);
  private localStorageService = inject(LocalStorageService);

  /**
   * Loads all quotes based on subject
   * */
  private _loadQuotes$ = new BehaviorSubject(0);
  loadQuotes$ = this._loadQuotes$.asObservable();

  /**
   * Loads all quotes
   * @remarks
   * This `this.localStorageService.authorizationScope$` used to for the login user data(optional)
   */
  quotesList$ = this.loadQuotes$.pipe(
    withLatestFrom(this.localStorageService.authorizationScope$),
    switchMap(([, authorizationScope]) => {
      return combineLatest([
        this.dashboardService.getAllQuotes(),
        of(authorizationScope),
      ]);
    }),
    map(([notifications, authorizationScope]) => ({
      notifications,
      authorizationScope,
    }))
  );

  /**
   * Triggers the load of notifications afte any change in list
   */
  loadNotifications(): void {
    this._loadQuotes$.next(1);
  }
}
