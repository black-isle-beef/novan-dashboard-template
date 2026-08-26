import { TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { HeaderComponent } from './header';
import { expectNoA11yViolations } from '../../testing/axe-helper';

describe('HeaderComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();
  });

  it('should have no detectable accessibility violations', async () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    await fixture.whenStable();

    await expectNoA11yViolations(fixture.nativeElement);
  });
});
