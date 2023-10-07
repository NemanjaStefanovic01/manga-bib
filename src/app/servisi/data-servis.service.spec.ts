import { TestBed } from '@angular/core/testing';

import { DataServisService } from './data-servis.service';

describe('DataServisService', () => {
  let service: DataServisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataServisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
