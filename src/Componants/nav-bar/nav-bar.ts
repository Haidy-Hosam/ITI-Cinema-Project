import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  imports: [],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css'
})
export class NavBar {
// changeLang(arg0: string) {
  currentLang: string = 'en';
    changeLang(lang: string) {
    this.currentLang = lang;
    if (lang === 'ar') {
      document.body.setAttribute('dir', 'rtl');  // يخلي الاتجاه من اليمين للشمال
    } else {
      document.body.setAttribute('dir', 'ltr');  // يرجع تاني شمال ليمين
    }
    throw new Error('Method not implemented.');
  }
}

