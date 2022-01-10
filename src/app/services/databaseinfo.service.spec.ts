import { TestBed } from '@angular/core/testing';

import { DatabaseinfoService } from './databaseinfo.service';

describe('DatabaseinfoService', () => {
  let service: DatabaseinfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatabaseinfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
