import { TestBed } from '@angular/core/testing';

import { TripsDashboardService } from './trips-dashboard.service';

describe('TripsDashboardService', () => {
  let service: TripsDashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TripsDashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
