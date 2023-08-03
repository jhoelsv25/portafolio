import { Component, OnInit, computed, inject } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { retry } from 'rxjs';
import { NzImageService } from 'ng-zorro-antd/image';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {
  private portfolioService = inject(PortfolioService);
  private nzImageService = inject(NzImageService)
  public portfolios = computed(() => this.portfolioService.allPortfolio) ;
  public backround = '#818CF8'
  public color= '#FFF'
  public currentFilter=''
  

  ngOnInit(): void {
      this.btnAll()
  }
  btnAll() {
    this.portfolioService.allFilter();
   this.currentFilter = 'all';
  }
  btnFilter(categ: string) {
    this.currentFilter = categ
    this.portfolioService.filterPort(categ)
    
  }
  preview(image:string){
    console.log(image)
    const images = [
      {
        src: image,
        /* width: '200px',
        height: '200px',
        alt: 'ng-zorro' */
      },]
    this.nzImageService.preview(images, { nzZoom:1, nzRotate:0})
  }
}
