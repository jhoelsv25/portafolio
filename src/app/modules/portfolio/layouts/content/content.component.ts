import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  public isHeaderTransparent = true;
  public isDarkMode = false;
  public titleMode: string = 'Cambiar de modo'
  
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isHeaderTransparent = (window.scrollY === 0);
  }
  darkMode(){
    this.isDarkMode = !this.isDarkMode;

    if(this.isDarkMode === false){
      this.titleMode='Cambiar a modo oscuro'
    }else{
      this.titleMode='Cambiar a modo claro'
    }
    
  }

}
