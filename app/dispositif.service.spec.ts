import { TestBed } from '@angular/core/testing';

import { DispositifService } from './dispositif.service';

describe('DispositifService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DispositifService = TestBed.get(DispositifService);
    expect(service).toBeTruthy();
  });
});
