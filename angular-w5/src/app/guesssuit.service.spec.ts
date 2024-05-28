import { TestBed } from '@angular/core/testing';

import { GuesssuitService } from './services/guesssuit.service';

describe('GuesssuitService', () => {
  let service: GuesssuitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuesssuitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
