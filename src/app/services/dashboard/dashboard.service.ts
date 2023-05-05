import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { quoteList } from 'src/app/model/const/api';
import { QuotesData } from 'src/app/model/interfaces/employees.interface';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor() {}

  /**
   * Get list of quotes
   * @returns Observable with list of quotes
   */
  getAllQuotes(): Observable<QuotesData[]> {
    return of(quoteList);
  }
}
