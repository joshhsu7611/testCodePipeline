/* tslint:disable:no-unused-variable */
import { async, inject, TestBed } from '@angular/core/testing';

import { MediaService } from './media.service';

describe('MediaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MediaService]
    });
  });

  it('should ...', inject([MediaService], (service: MediaService) => {
    expect(service).toBeTruthy();
  }));
});
