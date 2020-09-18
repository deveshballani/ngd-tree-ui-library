import { TestBed } from '@angular/core/testing';

import { NgdTreeUiService } from './ngd-tree-ui.service';

describe('NgdTreeUiService', () => {
  let service: NgdTreeUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgdTreeUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
