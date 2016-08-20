/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { SummaryPipe } from './summary.pipe';

describe('Pipe: Summary', () => {
  let pipe: SummaryPipe;

  beforeEach(() => {
    pipe = new SummaryPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should keep short text', () => {
    let shortText = "Lorem ipsum dolor sit amet";
    let actual = pipe.transform(shortText);
    expect(actual.length).toBeLessThan(50);
    expect(actual.endsWith('...')).toBeFalsy();
  });

  describe('with long text', () => {
    let longText: string;

    beforeEach(() => {
      longText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa " +
        "nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. " +
        "Voluptatum ducimus voluptates voluptas?";
    });

    it('should split at 50 characters and add ... at the end', () => {
      let actual = pipe.transform(longText);
      expect(actual.length).toBe(53);
      expect(actual.endsWith('...')).toBeTruthy();
    });

    it('should split at 20 characters and add ... at the end', () => {
      let actual = pipe.transform(longText, 20);
      expect(actual.length).toBe(23);
      expect(actual.endsWith('...')).toBeTruthy();
    });
  });
});
