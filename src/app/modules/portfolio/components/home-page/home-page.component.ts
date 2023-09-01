import { Component, computed, inject } from '@angular/core';
import { RedesSocialsService } from '../../services/redes-socials.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  private  socialService = inject(RedesSocialsService)
  public socials = computed(()=>this.socialService.allSocials);
  private readonly Url_CV = environment.UrlCV


  downloadPDF(){
    const url = this.Url_CV;
    const link : HTMLAnchorElement = document.createElement('a');
    link.href = url;
    link.setAttribute('downloasd', ' cv.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link)

  }
}
