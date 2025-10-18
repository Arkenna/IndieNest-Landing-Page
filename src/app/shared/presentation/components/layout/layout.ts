import {Component, inject} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {MatToolbar, MatToolbarRow} from '@angular/material/toolbar';
import {MatButton} from '@angular/material/button';
import {TranslatePipe} from '@ngx-translate/core';
import {LanguageSwitcher} from '../language-switcher/language-switcher';
import {FooterContent} from '../footer-content/footer-content';
import {Home} from '../../views/home/home';

@Component({
  selector: 'app-layout',
  imports: [
    RouterOutlet,
    RouterLink,
    MatToolbarRow,
    MatToolbar,
    MatButton,
    RouterLinkActive,
    TranslatePipe,
    LanguageSwitcher,
    FooterContent,
    Home
  ],
  templateUrl: './layout.html',
  styleUrl: './layout.css'
})
export class Layout {
  options = [
    {link: '/about', label: 'option.about'},
    {link: '/goals', label: 'option.goals'},
    {link: '/reviews', label: 'option.reviews'}
  ]
}
