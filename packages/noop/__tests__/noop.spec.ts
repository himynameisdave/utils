import noop from '../index';


describe('utils/noop', () => {
  it('does nothing and returns void (undefined', () => {
    expect(noop()).toBeUndefined();
  });
});
