import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RedesSocialsService {

  private socials:any=[
    {name:'GitHub', icon:'pi pi-github', url:'https://github.com/jhoelsv25/'},
    {name:'Email', icon:'pi pi-google', url:'https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new'},
    {name:'Youtube', icon:'pi pi-youtube',url:'https://www.youtube.com/channel/UCjUfIt1nyHbY-TabEGUIiNQ'},
    {name:'Linkedin', icon:'pi pi-linkedin',url:'https://www.linkedin.com/in/jhoel-silvestre-vargas-09737525b/'},
   ]

   get allSocials(){
    return this.socials
   }
}
