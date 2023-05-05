import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HomeDataService } from 'src/app/modules/dashboard/services/home-data.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [HomeDataService],
})
export class HomeComponent {
  constructor(private homeDataService: HomeDataService) {}

  /**
   * Loads all quote list
   */
  loadData$ = this.homeDataService.quotesList$.pipe(
    map((data) => ({
      notifications: data.notifications,
      authorizationScope: data.authorizationScope,
    }))
  );
}
