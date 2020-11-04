import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  public linkTheme = document.querySelector('#theme');
  public url = './assets/css/colors/default-dark.css';

  constructor() {
    if (localStorage.getItem('theme')) {
      this.url = localStorage.getItem('theme');
    }
    this.linkTheme.setAttribute('href', this.url);
  }

  changeTheme(theme: string) {
    const url = `./assets/css/colors/${theme}.css`;

    this.linkTheme.setAttribute('href', url);
    localStorage.setItem('theme', url);

    this.checkCurrentTheme();
  }


  checkCurrentTheme() {
    const links = document.querySelectorAll('.selector');

    links.forEach(elemento => {
      elemento.classList.remove('working');

      const btnTheme = elemento.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;

      const currentTheme = this.linkTheme.getAttribute('href');

      if (btnThemeUrl === currentTheme) {
        elemento.classList.add('working');
      }

    });

  }

}
