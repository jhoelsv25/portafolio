import { Component, computed, inject } from '@angular/core';
import { ExpperienceService } from '../../services/expperience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  private experService = inject(ExpperienceService) ;
  public experiences = computed(()=>this.experService.allExperience) 

}
