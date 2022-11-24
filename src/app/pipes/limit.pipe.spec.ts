import { LimitPipe } from './limit.pipe';

describe('LimitPipe', () => {
  it('create an instance', () => {
    const pipe = new LimitPipe();
    expect(pipe).toBeTruthy();
  });
});
