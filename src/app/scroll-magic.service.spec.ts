import { TestBed } from '@angular/core/testing';

import { ScrollMagicService } from './scroll-magic.service';

describe('ScrollMagicService', () => {
  let service: ScrollMagicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScrollMagicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
