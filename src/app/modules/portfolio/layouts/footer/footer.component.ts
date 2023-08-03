import { Component, computed, inject } from '@angular/core';
import { HeaderService } from '../../services/header.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RedesSocialsService } from '../../services/redes-socials.service';

@Component({
  selector: 'portfolio-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  newDate! : number
  private  socialService = inject(RedesSocialsService)
  private headerService = inject(HeaderService)
  public socials = computed(()=>this.socialService.allSocials)
  public items = computed(()=>this.headerService.allItemsHeader)
  
  constructor(){
    this.newDate = new Date().getFullYear()
  }


}
