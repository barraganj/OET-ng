import { TestBed } from '@angular/core/testing';

import { ConductoreService } from './conductore.service';

describe('ConductoreService', () => {
  let service: ConductoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConductoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
