import { TestBed } from '@angular/core/testing';

import { TravelOutlineService } from './travel-outline.service';

describe('TravelOutlineService', () => {
  let service: TravelOutlineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TravelOutlineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
