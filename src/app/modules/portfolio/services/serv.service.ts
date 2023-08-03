import { Injectable } from '@angular/core';
interface Service{
  title:string;
  urlImage:string;
  description:string;
}

@Injectable({
  providedIn: 'root'
})
export class ServService {
  private services:Service[] = [
    {title:'Pagina Web', urlImage:'assets/svg/page_web.svg', description:'Diseñamos sitios web atractivos, interactvos y funcionales para tu precensia online.'},
    {title:'Odoo ERP', urlImage:'assets/svg/erp.svg', description:'Optimiza tus procesos con soluciones integrales. Desarrollo e implementacion de Odoo ERP.'},
    {title:'Desarrollo Web', urlImage:'assets/svg/desarrollo_web.svg', description:'Transformamos ideas en sitios web potentes y cautivadores para optmizar tus procesos.'},
  ]

  public get allService():Service[]{
      return this.services
  }
}
  
