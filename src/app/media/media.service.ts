import { Injectable } from '@angular/core';

import { Media } from './media';

@Injectable()
export class MediaService {
  private mediaCache: Media[] = [];

  constructor() { }

  getMedia(): Promise<Media[]> {
    if (this.mediaCache.length !== 0) {
      return Promise.resolve(this.mediaCache);
    }

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.mediaCache = [{title: 'test', description: '', blob: ''}, {title: 'foo', description: '', blob: ''}];
        resolve(this.mediaCache);
      }, 3000);
    });
  }

}
