import { Component, computed, inject } from '@angular/core';
import { ServService } from '../../services/serv.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  private servService = inject(ServService)
  public services = computed(()=>this.servService.allService)

}
