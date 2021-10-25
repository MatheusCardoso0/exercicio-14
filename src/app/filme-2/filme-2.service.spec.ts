import { TestBed } from '@angular/core/testing';

import { FilmeService2 } from './filme-2.service';

describe('FilmeService 2', () => {
  let service: FilmeService2;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilmeService2);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
