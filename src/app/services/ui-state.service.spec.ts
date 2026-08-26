import { DOCUMENT } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { UiStateService } from './ui-state.service';

describe('UiStateService', () => {
  let document: Document;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    document = TestBed.inject(DOCUMENT);
    document.cookie = 'sidebar-open=; Path=/; Max-Age=0';
  });

  it('defaults to an open sidebar when no preference is stored', () => {
    const service = TestBed.inject(UiStateService);

    expect(service.isSidebarOpen()).toBe(true);
  });

  it('restores the stored sidebar preference', () => {
    document.cookie = 'sidebar-open=false; Path=/';

    const service = TestBed.inject(UiStateService);

    expect(service.isSidebarOpen()).toBe(false);
  });

  it('restores an explicitly open sidebar preference', () => {
    document.cookie = 'sidebar-open=true; Path=/';

    const service = TestBed.inject(UiStateService);

    expect(service.isSidebarOpen()).toBe(true);
  });

  it('persists the sidebar state after it changes', () => {
    const service = TestBed.inject(UiStateService);

    service.toggleSidebar();

    expect(service.isSidebarOpen()).toBe(false);
    expect(document.cookie).toContain('sidebar-open=false');

    service.closeSidebar();

    expect(document.cookie).toContain('sidebar-open=false');
  });
});