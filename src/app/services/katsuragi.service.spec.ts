import { TestBed } from '@angular/core/testing';

import { KatsuragiService } from './katsuragi.service';

describe('KatsuragiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KatsuragiService = TestBed.get(KatsuragiService);
    expect(service).toBeTruthy();
  });
});
