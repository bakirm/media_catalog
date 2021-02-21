import { TestBed } from '@angular/core/testing';

import { SearchmediaService } from './searchmedia.service';

describe('SearchmediaService', () => {
  let service: SearchmediaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchmediaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
