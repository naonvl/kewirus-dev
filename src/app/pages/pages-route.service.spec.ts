import { TestBed } from '@angular/core/testing';

import { PagesRouteService } from './pages-route.service';

describe('PagesRouteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PagesRouteService = TestBed.get(PagesRouteService);
    expect(service).toBeTruthy();
  });
});
