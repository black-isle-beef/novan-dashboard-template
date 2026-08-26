import axe from 'axe-core';

/** Runs axe-core against an element and fails the test when violations are found. */
export async function expectNoA11yViolations(element: Element): Promise<void> {
  const results = await axe.run(element, {
    // jsdom lacks layout/rendering, so rules relying on computed visual styles are unreliable.
    rules: {
      'color-contrast': { enabled: false },
    },
  });

  if (results.violations.length > 0) {
    const details = results.violations
      .map((violation) => {
        const nodes = violation.nodes.map((node) => node.target.join(', ')).join('\n    ');
        return `${violation.id} (${violation.impact}): ${violation.help}\n    ${nodes}`;
      })
      .join('\n\n');

    throw new Error(`Accessibility violations found:\n\n${details}`);
  }
}
