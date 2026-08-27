import { Component } from '@angular/core';
import { NovanFooterComponent } from '../footer/footer';
import { NovanHeaderComponent } from '../header/header';
import { NovanSidebarComponent } from '../sidebar/sidebar';

@Component({
  selector: 'novan-dashboard',
  standalone: true,
  imports: [NovanHeaderComponent, NovanSidebarComponent, NovanFooterComponent],
  templateUrl: './dashboard.html',
})
export class NovanDashboardComponent {}
