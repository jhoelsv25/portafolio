import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private items:any =[
    {
      name:'Inicio',
      url:'/home'
    },
    {
      name:'Sobre mi',
      url:'/abaut'
    },

    {
      name:'Experencia',
      url:'/experience'
    },
    {
      name:'Portafolio',
      url:'/portfolio'
    },


    {
      name:'Contacto',
      url:'contact'
    },
  ]

   get allItemsHeader(){

    return this.items
  }
}
