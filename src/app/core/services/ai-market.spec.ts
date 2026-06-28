import { TestBed } from '@angular/core/testing';

import { AiMarket } from './ai-market';

describe('AiMarket', () => {
  let service: AiMarket;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AiMarket);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
