import { Component, OnInit } from '@angular/core';

import { Media } from '../media.model';
import { MediaService } from '../media.service';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit {
  media: Media[];

  constructor(private mediaService: MediaService) {
    this.media = [];
  }

  getMedia(): void {
    this.mediaService.getMedia().then(media => this.media = media);
  }

  ngOnInit(): void {
    this.getMedia();
  }

}
