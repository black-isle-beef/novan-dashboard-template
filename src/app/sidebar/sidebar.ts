import { Component, inject } from '@angular/core';
import { UiStateService } from '../services/ui-state.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.html',
})
export class SidebarComponent {
  protected readonly uiState = inject(UiStateService);
}
