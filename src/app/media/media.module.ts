import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MediaComponent } from './media/media.component';
import { MediaService } from './media.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MediaComponent
  ],
  providers: [
    MediaService
  ]
})
export class MediaModule { }
