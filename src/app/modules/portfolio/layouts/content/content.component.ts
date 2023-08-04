import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  public isHeaderTransparent = true;
  public isDarkMode = false;
  public titleMode: string = 'Cambiar de modo';
  private darkModeTitle: string = 'ligth';

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isHeaderTransparent = window.scrollY === 0;
  }

  ngOnInit(): void {
    this.applyDarkTheme();
    this.isDarkMode = this.dark();
  }

  dark() {
    const mode = localStorage.getItem('mode');
    return mode === 'true';
  }

  darkMode() {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode === false) {
      this.saveLocalStorage('mode', JSON.stringify(this.isDarkMode));
      this.titleMode = 'Cambiar a modo oscuro';
      this.darkModeTitle = 'ligth';
      this.saveLocalStorage('theme', this.darkModeTitle);
    } else {
      this.saveLocalStorage('mode', JSON.stringify(this.isDarkMode));
      this.titleMode = 'Cambiar a modo claro';
      this.darkModeTitle = 'dark';
      this.saveLocalStorage('theme', this.darkModeTitle);
    }
  }
  applyDarkTheme() {
    if (
      this.loadLocalStorage() === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  saveLocalStorage(key: string, value: string) {
    localStorage.setItem(key, value);
    this.applyDarkTheme();
  }

  loadLocalStorage(): string {
    if (!localStorage.getItem('theme')) return 'light';
    return localStorage.getItem('theme') || 'light';
  }
}
