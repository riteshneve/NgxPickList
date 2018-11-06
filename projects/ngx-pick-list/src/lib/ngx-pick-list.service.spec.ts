import { TestBed, inject } from '@angular/core/testing';

import { NgxPickListService } from './ngx-pick-list.service';

describe('NgxPickListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxPickListService]
    });
  });

  it('should be created', inject([NgxPickListService], (service: NgxPickListService) => {
    expect(service).toBeTruthy();
  }));
});
