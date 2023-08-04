import { Injectable, signal } from '@angular/core';
interface Portfolio{
  title:string;
  urlIcon:Tecn[];
  urlImages: string;
  urlCod:string;
  category:string;
  url:string;
}
interface Tecn{
  name:string;
  url:string
}
@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private data =[
    {
      title:'ToDo List',
      urlIcon:[
        { name:'Angular', url:'assets/svg/angular.svg' },
        { name:'TypeScript', url:'assets/svg/typescript.svg' },
      ],
      urlImages:'assets/img/fondo.webp',
      urlCod:'github',
      category:'web',
      url:'https://github.com/jhoelsv25/ToDo',
    },
    {
      title:'Mapas con Marcadores',
      urlIcon:[
        { name:'Angular', url:'assets/svg/angular.svg' },
        { name:'TypeScript', url:'assets/svg/typescript.svg' },
      ],
      urlImages:'assets/img/fondo.webp',
      urlCod:'github',
      category:'develop',
      url:'https://github.com/jhoelsv25/maps',
    },
    {
      title:'Carrito de compras',
      urlIcon:[
        { name:'Angular', url:'assets/svg/angular.svg' },
        { name:'TypeScript', url:'assets/svg/typescript.svg' },
      ],
      urlImages:'assets/img/fondo.webp',
      urlCod:'github',
      category:'web',
      url:'https://github.com/jhoelsv25/Ecommerce',
    }
  ]

  private portflio = signal<Portfolio[]>(this.data)
  
  public get allPortfolio(): Portfolio[]{
    return this.portflio()
  }


  public filterPort(categ: string) {
    const filteredPortfolio = this.data.filter((val) => val.category === categ);
    return this.portflio.set(filteredPortfolio);
  }
  allFilter(){
    return this.portflio.set(this.data)
  }
  
}
