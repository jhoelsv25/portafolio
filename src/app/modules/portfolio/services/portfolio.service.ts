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
      urlImages:'assets/img/todo.webp',
      urlCod:'https://gitlab.com/jhoel.sv25/task',
      category:'web',
      url:'https://todo-jhoel.netlify.app/#/task/task-list',
    },
    {
      title:'Mapas con Marcadores',
      urlIcon:[
        { name:'Angular', url:'assets/svg/angular.svg' },
        { name:'TypeScript', url:'assets/svg/typescript.svg' },
      ],
      urlImages:'assets/img/fondo.webp',
      urlCod:'https://github.com/jhoelsv25/maps',
      category:'develop',
      url:'https://github.com/jhoelsv25/maps',
    },
{
      title:'Login',
      urlIcon:[
        { name:'Angular', url:'assets/svg/angular.svg' },
        { name:'TypeScript', url:'assets/svg/typescript.svg' },
      ],
      urlImages:'assets/img/login.webp',
      urlCod:'https://github.com/jhoelsv25/login/tree/master',
      category:'web',
      url:'https://github.com/jhoelsv25/login/tree/master',
    },
    {
      title:'Carrito de compras',
      urlIcon:[
        { name:'Angular', url:'assets/svg/angular.svg' },
        { name:'TypeScript', url:'assets/svg/typescript.svg' },
      ],
      urlImages:'assets/img/cart.webp',
      urlCod:'https://github.com/jhoelsv25/cart',
      category:'develop',
      url:'https://github.com/jhoelsv25/cart',
    },{
      title:'Gifs',
      urlIcon:[
        { name:'Angular', url:'assets/svg/angular.svg' },
        { name:'TypeScript', url:'assets/svg/typescript.svg' },
      ],
      urlImages:'assets/img/gifs.webp',
      urlCod:'https://github.com/jhoelsv25/gifs',
      category:'web',
      url:'https://github.com/jhoelsv25/gifs',
    },
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
