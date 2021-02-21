import { TestBed } from '@angular/core/testing';

import { MediaitemService } from './mediaitem.service';

describe('MediaitemService', () => {
  let service: MediaitemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MediaitemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
