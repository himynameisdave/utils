---
to: packages/<%= name %>/__tests__/<%= name %>.spec.ts
---
import <%= name %> from '../index';


describe('utils/<%= name %>', () => {
  it('does something', () => {
    const expected = '';
    expect(<%= name %>()).toBe(expected);
  });
});
