import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RedesSocialsService {

  private socials:any=[
    {name:'GitHub', icon:'pi pi-github', url:''},
    {name:'Email', icon:'pi pi-google', url:''},
    {name:'Youtube', icon:'pi pi-youtube',u:''},
    {name:'Linkedin', icon:'pi pi-linkedin',u:''},
   ]

   get allSocials(){
    return this.socials
   }
}
