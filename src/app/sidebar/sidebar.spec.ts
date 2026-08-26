import { TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { SidebarComponent } from './sidebar';
import { expectNoA11yViolations } from '../../testing/axe-helper';

describe('SidebarComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarComponent],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();
  });

  it('should have no detectable accessibility violations', async () => {
    const fixture = TestBed.createComponent(SidebarComponent);
    fixture.detectChanges();
    await fixture.whenStable();

    await expectNoA11yViolations(fixture.nativeElement);
  });
});
