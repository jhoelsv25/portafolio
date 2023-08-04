import { Component, ElementRef, HostListener, ViewChild, computed, inject } from '@angular/core';
import { HeaderService } from '../../services/header.service';

@Component({
  selector: 'portfolio-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  private headerService = inject(HeaderService)
  public items = computed(()=>this.headerService.allItemsHeader)
  public isIconBars = false;
  public isMenuHidden = false;

  @ViewChild('menuRef', { static: true }) menuRef!: ElementRef<HTMLElement>;


  toggleMenu() {
    this.isMenuHidden = !this.isMenuHidden;
    this.isIconBars = !this.isIconBars;
  }

}
