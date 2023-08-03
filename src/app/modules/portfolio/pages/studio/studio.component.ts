import { Component, computed, inject } from '@angular/core';
import { ExpperienceService } from '../../services/expperience.service';
import { NzImageService } from 'ng-zorro-antd/image';

@Component({
  selector: 'app-studio',
  templateUrl: './studio.component.html',
  styleUrls: ['./studio.component.css']
})
export class StudioComponent {
  private experService = inject(ExpperienceService) ;
  private nzImageService = inject(NzImageService)
  public studios = computed(()=>this.experService.allStudio) 


  preView(image : string){
    const images = [
      {
        src: image,
        width: '400px',
        height: '400px',
        alt: 'ng-zorro'
      },

    ];
    this.nzImageService.preview(images, { nzZoom: 1.5, nzRotate: 0 });
  }
}
