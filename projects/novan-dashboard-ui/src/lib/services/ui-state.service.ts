import { DOCUMENT } from '@angular/common';
import { Injectable, inject, signal } from '@angular/core';

const SIDEBAR_OPEN_COOKIE = 'sidebar-open';
const ONE_YEAR_IN_SECONDS = 60 * 60 * 24 * 365;

@Injectable({ providedIn: 'root' })
export class UiStateService {
  private readonly document = inject(DOCUMENT);
  readonly isSidebarOpen = signal(this.readSidebarState());

  toggleSidebar(): void {
    this.setSidebarState(!this.isSidebarOpen());
  }

  closeSidebar(): void {
    this.setSidebarState(false);
  }

  private readSidebarState(): boolean {
    const cookie = this.document.cookie
      .split('; ')
      .find((entry) => entry.startsWith(`${SIDEBAR_OPEN_COOKIE}=`));

    return cookie?.split('=')[1] !== 'false';
  }

  private setSidebarState(isOpen: boolean): void {
    this.isSidebarOpen.set(isOpen);
    this.document.cookie = `${SIDEBAR_OPEN_COOKIE}=${isOpen}; Path=/; Max-Age=${ONE_YEAR_IN_SECONDS}; SameSite=Lax`;
  }
}
