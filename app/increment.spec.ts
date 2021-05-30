import { expect } from 'chai';
import { incFnCreator } from './increment';

describe('Counter test', () => {
  it('should work correctly', () => {
    const incFn = incFnCreator();
    let result = incFn();
    expect(result).to.eq(0);

    for (let i = 0; i < 10; i++) {
      result = incFn();
    }
    expect(result).to.eq(10);
  });
});
