import { Injectable } from '@angular/core';

interface Experience {
  cargo: string;
  dateStart: string;
  dateEnd: string;
  description: string;
  company: string;
}

interface Studio {
  company: string;
  dateStart: string;
  title:string
  dateEnd: string;
  description: string;
  urlCertificate: string;
}
@Injectable({
  providedIn: 'root',
})
export class ExpperienceService {
  private studio: Studio[] = [
    {
      company: 'Universidad Nacional de Huancavelica',
      dateStart: 'Abr - 2017',
      title:'Ing. Sistemas',
      dateEnd: 'Dic - 2021',
      description: 'Escuela profesional de ingenieria de sistemas',
      urlCertificate: 'assets/img/fondo01.webp',
    },
    {
      company: 'Udemy',
      dateStart: 'May - 2023',
      title:'Angular',
      dateEnd: 'Jul - 2023',
      description: 'Plataforma de Udemy con el Instructor Fernando Herrera',
      urlCertificate: 'assets/img/fondo01.webp',
    },
  ];
  private experience: Experience[] = [
    {
      cargo: 'Desarrollador web',
      dateStart: 'Oct - 2020',
      dateEnd: ' Dic - 2022',
      description:
        'Realizar un sistema de control de compra y venta de los productos con la tecnologia PHP y MySQL.',
      company: 'Sacos Chincha SRL',
    },
    {
      cargo: 'Desarrollador web',
      dateStart: 'Feb - 2021',
      dateEnd: 'May - 2021',
      description:
        'Realizar un sistema de control de venta y compra de los productos con la tecnologia PHP y MySQL.',
      company: 'Multiservcios Madyel',
    },

    {
      cargo: 'Desarrollador web',
      dateStart: 'Ago - 2022',
      dateEnd: 'Ago - 2023',
      description:
        'Apoyo en desarrollo web con el framework Angular y implementación de sistema web con ERP Odoo.',
      company: 'Jhuno SAC',
    },
  ];

  public get allExperience(): Experience[] {
    return this.experience;
  }
  public get allStudio(): Studio[]{
    return this.studio
  }
}
