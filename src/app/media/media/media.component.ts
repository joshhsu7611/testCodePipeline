import { Component, OnInit } from '@angular/core';

import { Media } from '../media';
import { MediaService } from '../media.service';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.sass']
})
export class MediaComponent implements OnInit {
  media: Media[] = [];

  constructor(private mediaService: MediaService) { }

  getMedia(): void {
    this.mediaService.getMedia().then(media => this.media = media);
  }

  ngOnInit(): void {
    this.getMedia();
  }

}
