import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HomeDataService } from 'src/app/modules/dashboard/services/home-data.service';
import { map } from 'rxjs';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule, // Include CommonModule or other necessary modules
    SharedModule,
  ],
  standalone: true, // Mark as standalone
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
