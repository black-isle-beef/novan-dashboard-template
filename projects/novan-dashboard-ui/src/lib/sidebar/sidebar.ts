import { Component, inject } from '@angular/core';
import { UiStateService } from '../services/ui-state.service';

@Component({
  selector: 'novan-sidebar',
  standalone: true,
  templateUrl: './sidebar.html',
})
export class NovanSidebarComponent {
  protected readonly uiState = inject(UiStateService);
}
