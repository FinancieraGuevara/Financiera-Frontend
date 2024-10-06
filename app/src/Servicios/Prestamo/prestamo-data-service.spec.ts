import { TestBed } from '@angular/core/testing';

import { PrestamoDataService} from './prestamo-data-service';

describe('PrestamoDataService', () => {
  let service: PrestamoDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrestamoDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
