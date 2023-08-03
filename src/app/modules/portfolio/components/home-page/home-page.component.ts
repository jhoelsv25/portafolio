import { Component, computed, inject } from '@angular/core';
import { RedesSocialsService } from '../../services/redes-socials.service';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  private  socialService = inject(RedesSocialsService)
  public socials = computed(()=>this.socialService.allSocials)
}
