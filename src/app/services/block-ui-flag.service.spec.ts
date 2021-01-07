import { TestBed } from '@angular/core/testing';

import { BlockUiFlagService } from './block-ui-flag.service';

describe('BlockUiFlagService', () => {
  let service: BlockUiFlagService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlockUiFlagService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
