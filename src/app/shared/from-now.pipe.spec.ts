/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { FromNowPipe } from './from-now.pipe';

describe('Pipe: FromNow', () => {
  let pipe: FromNowPipe;

  beforeEach(() => {
    pipe = new FromNowPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('transform a date in timer until now', () => {
    let d = new Date(1470175200000);
    let actual = pipe.transform(d);
    expect(actual.endsWith('ago')).toBeTruthy();
  });
});
