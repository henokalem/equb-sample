import { TestBed } from '@angular/core/testing';

import { NestedJsonService } from './nested-json.service';

describe('NestedJsonService', () => {
  let service: NestedJsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NestedJsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
