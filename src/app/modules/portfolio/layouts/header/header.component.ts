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

  /* @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const clickedElement = event.target as HTMLElement;
    const menu = this.menuRef?.nativeElement;

    const isClickedOnMenu = menu && menu.contains(clickedElement);

    if (this.isMenuHidden && isClickedOnMenu) {
      // Si el menú está oculto y el clic se produce dentro del menú, no hacer nada.
      return;
    }

    // Si el clic se produce fuera del menú, ocultarlo
    this.isMenuHidden = true;
  } */

}
