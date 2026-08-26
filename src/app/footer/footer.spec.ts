import { TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { FooterComponent } from './footer';
import { expectNoA11yViolations } from '../../testing/axe-helper';

describe('FooterComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterComponent],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();
  });

  it('should have no detectable accessibility violations', async () => {
    const fixture = TestBed.createComponent(FooterComponent);
    fixture.detectChanges();
    await fixture.whenStable();

    await expectNoA11yViolations(fixture.nativeElement);
  });
});
