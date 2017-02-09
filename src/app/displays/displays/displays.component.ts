import { Component, OnInit } from '@angular/core';

import { MediaService } from '../../media/media.service';

@Component({
  selector: 'app-displays',
  templateUrl: './displays.component.html',
  styleUrls: ['./displays.component.css']
})
export class DisplaysComponent implements OnInit {

  constructor(private mediaService: MediaService) { }

  ngOnInit() {
  }

}
