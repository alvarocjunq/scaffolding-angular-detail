import { TestBed } from '@angular/core/testing';

import { ScaffoldingDetailService } from './scaffolding-detail.service';

describe('ScaffoldingDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScaffoldingDetailService = TestBed.get(ScaffoldingDetailService);
    expect(service).toBeTruthy();
  });
});
